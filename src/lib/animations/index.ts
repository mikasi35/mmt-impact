/**
 * Animation orchestrator.
 *
 * GSAP is ~35kB gzipped with ScrollTrigger. It is therefore imported
 * DYNAMICALLY and only when a page actually contains an element that needs it.
 * Pages that are pure content (policies, contact, resources) ship zero
 * animation JavaScript beyond the reveal observer.
 */

import { initReveal, destroyReveal } from './reveal';
import { initAnchorScroll } from './anchors';

const GSAP_SELECTOR = '[data-counter], [data-parallax], [data-hero]';

let gsapLoaded = false;
let ScrollTriggerRef: any = null;

/** Resolves once web fonts have swapped in, or after 1.5s — whichever first. */
function fontsSettled(): Promise<void> {
  if (!('fonts' in document)) return Promise.resolve();
  return Promise.race([
    document.fonts.ready.then(() => undefined).catch(() => undefined),
    new Promise<void>((resolve) => setTimeout(resolve, 1500)),
  ]);
}

async function initGsapFeatures(): Promise<void> {
  if (!document.querySelector(GSAP_SELECTOR)) return;

  const [[{ gsap }, { ScrollTrigger }]] = await Promise.all([
    Promise.all([import('gsap'), import('gsap/ScrollTrigger')]),
    // Google Fonts loads via a <link> that isn't render-blocking, so text
    // metrics change (fallback font → the real one) shortly after this
    // module starts running. Any ScrollTrigger start/end position built on
    // clamp()'d type is computed from whatever the DOM measures at CREATION
    // time — build it before the swap and it locks in a position from a
    // layout that's about to change. Waiting for fonts first means triggers
    // are only ever built once, already measuring the real layout.
    fontsSettled(),
  ]);

  if (!gsapLoaded) {
    gsap.registerPlugin(ScrollTrigger);
    gsapLoaded = true;
  }
  ScrollTriggerRef = ScrollTrigger;

  const [{ initHero }, { initCounters }, { initParallax }] = await Promise.all([
    import('./hero'),
    import('./counters'),
    import('./parallax'),
  ]);

  initHero(gsap);
  initCounters(gsap, ScrollTrigger);
  initParallax(gsap, ScrollTrigger);

  ScrollTrigger.refresh();

  // Defensive backstop only — for anything else (not fonts, that's handled
  // above) that finishes loading late enough to shift layout after triggers
  // were already built.
  if (document.readyState !== 'complete') {
    window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
  }
}

function teardown(): void {
  destroyReveal();
  ScrollTriggerRef?.getAll?.().forEach((t: any) => t.kill());
}

export function bootAnimations(): void {
  document.documentElement.classList.add('js');
  initAnchorScroll();

  const run = () => {
    initReveal();
    void initGsapFeatures();
  };

  // `astro:page-load` fires once after the INITIAL page load and again after
  // every subsequent client-side navigation — it already covers first load,
  // so it is the only trigger `run` needs. Calling `run()` directly here as
  // well, on top of this listener, silently double-initialised every
  // ScrollTrigger on first load (two instances stacked on the same element,
  // each computing distances against a DOM the other had already altered) —
  // the original cause of a since-removed pinned-scroll section going blank.
  // One trigger, not two.
  document.addEventListener('astro:before-swap', teardown);
  document.addEventListener('astro:page-load', run);
}
