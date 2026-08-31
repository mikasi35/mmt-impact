/**
 * Icon name union, kept in a plain .ts module rather than exported from
 * Icon.astro's frontmatter — an Astro component's frontmatter is compiled as
 * part of its render module, and a multi-line `export type` union there can
 * survive into the runtime bundle and trip the esbuild step. A dedicated
 * module avoids that entirely and gives every consumer one import path.
 */
export type IconName =
  | 'education'
  | 'empowerment'
  | 'community'
  | 'livelihoods'
  | 'humanitarian'
  | 'consultancy'
  | 'arrow-right'
  | 'arrow-left';
