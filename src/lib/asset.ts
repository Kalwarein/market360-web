/**
 * Shared image/asset resolver.
 *
 * Rule used across the whole site:
 *  - If the asset is actually available in the project's image directory
 *    (it resolves to a bundled `public/` path such as `/brand/...`), the real
 *    image is displayed.
 *  - If the asset is NOT available (e.g. it only points at an external CDN
 *    path like `/__l5e/...` that isn't shipped with the project), a labelled
 *    placeholder is rendered instead, showing the friendly name (hero, buyer…).
 */

export type AssetMeta = { url?: string; original_filename?: string };

/** Build an inline SVG placeholder data-URI that shows the image's name. */
export function placeholderSrc(label: string, w = 1280, h = 960): string {
  const svg =
    `<svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}'>` +
    `<rect width='100%' height='100%' fill='#e8efe9'/>` +
    `<rect x='1' y='1' width='${w - 2}' height='${h - 2}' fill='none' stroke='#bcd5c4' stroke-width='2'/>` +
    `<text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' ` +
    `font-family='sans-serif' font-weight='600' font-size='${Math.round(w / 18)}' fill='#3a6b4f'>${label}</text>` +
    `</svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

/** True when the asset resolves to an image that ships with the project. */
export function isAssetAvailable(asset?: AssetMeta): boolean {
  const url = asset?.url;
  if (!url) return false;
  // External/unsynced CDN assets are not available in the directory.
  if (url.startsWith("/__l5e") || url.startsWith("http")) return false;
  return true;
}

/**
 * Returns the displayable src for an asset: the real URL when available,
 * otherwise a named placeholder.
 */
export function assetSrc(asset: AssetMeta | undefined, name: string): string {
  return isAssetAvailable(asset) ? (asset!.url as string) : placeholderSrc(name);
}
