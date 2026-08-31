export function cx(...parts: (string | false | null | undefined)[]): string {
  return parts.filter(Boolean).join(' ');
}

const DATE_FMT = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

const DATE_SHORT = new Intl.DateTimeFormat('en-GB', {
  day: '2-digit',
  month: 'short',
  year: 'numeric',
});

export function formatDate(d: Date | string): string {
  return DATE_FMT.format(typeof d === 'string' ? new Date(d) : d);
}

export function formatDateShort(d: Date | string): string {
  return DATE_SHORT.format(typeof d === 'string' ? new Date(d) : d).toUpperCase();
}

export function isoDate(d: Date | string): string {
  return (typeof d === 'string' ? new Date(d) : d).toISOString().slice(0, 10);
}

/** "01", "02" … used throughout the editorial numbering system. */
export function pad(n: number): string {
  return String(n).padStart(2, '0');
}

export function readingTime(body: string): number {
  const words = body.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 210));
}

/** Truncate on a word boundary without cutting mid-word. */
export function excerpt(text: string, max = 180): string {
  const clean = text.replace(/\s+/g, ' ').trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max);
  return cut.slice(0, cut.lastIndexOf(' ')) + '…';
}

export function slugify(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Sort newest-first by a date field. */
export function byDateDesc<T extends { data: { date: Date } }>(a: T, b: T): number {
  return b.data.date.valueOf() - a.data.date.valueOf();
}

export function isPast(d: Date | string | undefined): boolean {
  if (!d) return false;
  return new Date(d).valueOf() < Date.now();
}
