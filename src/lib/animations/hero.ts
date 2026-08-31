/**
 * Hero entrance.
 *
 * A slow settle rather than a performance: the media eases out of a small
 * over-scale, the eyebrow and coordinate arrive, then the display lines lift
 * in sequence. Nothing here gates content — the hero is fully readable before
 * the timeline runs, and reduced-motion skips straight to the final state.
 */

import type { gsap as GSAP } from 'gsap';

export function initHero(gsap: typeof GSAP): void {
  const hero = document.querySelector<HTMLElement>('[data-hero]');
  if (!hero) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const media = hero.querySelector<HTMLElement>('[data-hero-media]');
  const eyebrow = hero.querySelectorAll<HTMLElement>('[data-hero-eyebrow]');
  const lines = hero.querySelectorAll<HTMLElement>('[data-hero-line] > span');
  const tail = hero.querySelectorAll<HTMLElement>('[data-hero-tail]');

  if (reduced) {
    gsap.set([media, ...eyebrow, ...lines, ...tail], { clearProps: 'all', opacity: 1, y: 0, scale: 1 });
    hero.dataset.heroReady = 'true';
    return;
  }

  const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

  if (media) {
    tl.fromTo(
      media,
      { scale: 1.1, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.8, ease: 'power2.out' },
      0
    );
  }

  tl.fromTo(eyebrow, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.9, stagger: 0.08 }, 0.25);
  tl.fromTo(lines, { yPercent: 108 }, { yPercent: 0, duration: 1.25, stagger: 0.09 }, 0.35);
  tl.fromTo(tail, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 1, stagger: 0.09 }, 0.85);

  tl.eventCallback('onStart', () => {
    hero.dataset.heroReady = 'true';
  });
}
