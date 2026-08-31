/**
 * Smooth-scrolls same-page anchor links via scrollIntoView.
 *
 * Deliberately NOT CSS `scroll-behavior: smooth` on <html> — that applies to
 * every scroll on the page, including the ones GSAP ScrollTrigger drives for
 * the pinned "How We Work" timeline. Two things animating scroll position at
 * once is what caused that section to feel like it locked and would not
 * reverse. This scopes smooth scrolling to actual anchor-link clicks only.
 */
export function initAnchorScroll(): void {
  document.addEventListener('click', (e) => {
    const link = (e.target as HTMLElement)?.closest<HTMLAnchorElement>('a[href^="#"]');
    if (!link) return;

    const id = link.getAttribute('href')?.slice(1);
    if (!id) return;

    const target = document.getElementById(id);
    if (!target) return;

    e.preventDefault();
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    target.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });

    // Keep the URL and focus in sync without re-triggering native jump scroll.
    history.pushState(null, '', `#${id}`);
    if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  });
}
