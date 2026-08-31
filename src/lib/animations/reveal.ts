/**
 * Scroll reveal.
 *
 * Deliberately NOT GSAP. Reveals are the most frequent motion on the site and
 * an IntersectionObserver + CSS transition costs ~0 bytes of library weight and
 * degrades correctly when JavaScript never arrives (the `html.js` guard in
 * utilities.css means content is visible by default).
 */

let observer: IntersectionObserver | null = null;

export function initReveal(): void {
  if (typeof window === 'undefined') return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const targets = document.querySelectorAll<HTMLElement>('[data-reveal], .reveal-lines');

  if (reduced || !('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-revealed'));
    return;
  }

  observer?.disconnect();
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        el.classList.add('is-revealed');
        observer?.unobserve(el);
      }
    },
    { rootMargin: '0px 0px -12% 0px', threshold: 0.08 }
  );

  targets.forEach((el, i) => {
    // Stagger siblings that share a parent, so groups arrive as a sequence.
    if (!el.style.getPropertyValue('--reveal-delay')) {
      const group = el.dataset.revealGroup;
      if (group) el.style.setProperty('--reveal-delay', `${(i % 6) * 80}ms`);
    }
    // Anything already in view on load reveals immediately — no blank first screen.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
      requestAnimationFrame(() => el.classList.add('is-revealed'));
      return;
    }
    observer!.observe(el);
  });
}

export function destroyReveal(): void {
  observer?.disconnect();
  observer = null;
}
