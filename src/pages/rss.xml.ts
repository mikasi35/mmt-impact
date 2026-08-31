import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { site } from '@data/site';
import { byDateDesc } from '@lib/utils';

const esc = (s: string) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

export const GET: APIRoute = async ({ site: astroSite }) => {
  const origin = (astroSite?.toString() ?? site.url).replace(/\/$/, '');

  const news = (await getCollection('news', ({ data }) => !data.draft)).sort(byDateDesc);
  const stories = (await getCollection('stories', ({ data }) => !data.draft)).sort(byDateDesc);

  const items = [
    ...news.map((n) => ({
      title: n.data.title,
      link: `${origin}/news/${n.id}`,
      description: n.data.summary,
      date: n.data.date,
      category: n.data.category,
    })),
    ...stories.map((s) => ({
      title: s.data.title,
      link: `${origin}/impact/stories/${s.id}`,
      description: s.data.summary,
      date: s.data.date,
      category: 'impact-story',
    })),
  ].sort((a, b) => b.date.valueOf() - a.date.valueOf());

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>MMT Impact — News &amp; Stories</title>
    <link>${origin}</link>
    <description>${esc(site.shortDescription)}</description>
    <language>en-gb</language>
    <atom:link href="${origin}/rss.xml" rel="self" type="application/rss+xml" />
    <lastBuildDate>${(items[0]?.date ?? new Date()).toUTCString()}</lastBuildDate>
${items
  .map(
    (i) => `    <item>
      <title>${esc(i.title)}</title>
      <link>${i.link}</link>
      <guid isPermaLink="true">${i.link}</guid>
      <description>${esc(i.description)}</description>
      <category>${esc(i.category)}</category>
      <pubDate>${i.date.toUTCString()}</pubDate>
    </item>`
  )
  .join('\n')}
  </channel>
</rss>`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
