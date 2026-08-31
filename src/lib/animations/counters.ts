/**
 * Impact figure counters.
 *
 * The number in the DOM is the real, final number — the animation only
 * interpolates toward it. If JavaScript fails, the correct figure is already
 * rendered. An impact statistic must never depend on a script to be truthful.
 */

import type { gsap as GSAP } from 'gsap';

export function initCounters(gsap: typeof GSAP, ScrollTrigger: any): void {
  const nodes = document.querySelectorAll<HTMLElement>('[data-counter]');
  if (!nodes.length) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) return;

  nodes.forEach((el) => {
    const target = Number(el.dataset.counter);
    if (!Number.isFinite(target)) return;

    const suffix = el.dataset.counterSuffix ?? '';
    const state = { v: 0 };
    // Larger figures count from further back so the motion reads as scale.
    const duration = target >= 5000 ? 2.2 : target >= 500 ? 1.7 : 1.2;

    gsap.to(state, {
      v: target,
      duration,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      onUpdate() {
        el.textContent = Math.round(state.v).toLocaleString('en-GB') + suffix;
      },
      onComplete() {
        el.textContent = target.toLocaleString('en-GB') + suffix;
      },
    });
  });

  void ScrollTrigger;
}
