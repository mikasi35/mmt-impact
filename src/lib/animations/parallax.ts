/**
 * Scroll-linked media movement.
 *
 * Used sparingly: hero media, full-bleed plates and the South Sudan geographic
 * section. Transform-only, so it stays on the compositor.
 */

import type { gsap as GSAP } from 'gsap';

export function initParallax(gsap: typeof GSAP, ScrollTrigger: any): void {
  const nodes = document.querySelectorAll<HTMLElement>('[data-parallax]');
  if (!nodes.length) return;

  const mm = gsap.matchMedia();

  mm.add(
    {
      motion: '(prefers-reduced-motion: no-preference)',
      desktop: '(min-width: 48rem)',
    },
    (context) => {
      const { motion, desktop } = context.conditions as Record<string, boolean>;
      if (!motion) return;

      nodes.forEach((el) => {
        const strength = Number(el.dataset.parallax || '12');
        const distance = desktop ? strength : strength * 0.45;

        gsap.fromTo(
          el,
          { yPercent: -distance / 2 },
          {
            yPercent: distance / 2,
            ease: 'none',
            scrollTrigger: {
              trigger: el.closest('[data-parallax-scope]') ?? el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.6,
            },
          }
        );
      });
    }
  );

  void ScrollTrigger;
}
