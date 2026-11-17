/**
 * Synchronizes canonical, Open Graph, and Twitter preview URLs at runtime
 * when hosted on an HTTP(S) origin other than GitHub Pages.
 */
const GITHUB_PAGES_ORIGIN = "https://skorpiong.github.io";

function syncMetadataUrls() {
  const { protocol, origin, pathname } = window.location;
  if ((protocol !== "http:" && protocol !== "https:") || origin === GITHUB_PAGES_ORIGIN) {
    return;
  }

  const projectRootUrl = new URL("../", import.meta.url);
  const pageUrl = `${origin}${pathname}`;

  const updates = [
    ['link[rel="canonical"]', "href", pageUrl],
    ['meta[property="og:url"]', "content", pageUrl],
    ['meta[property="og:image"]', "content", new URL("public/og-image.png", projectRootUrl).href],
    ['meta[name="twitter:url"]', "content", pageUrl],
    [
      'meta[name="twitter:image"]',
      "content",
      new URL("public/twitter-image.png", projectRootUrl).href,
    ],
  ];

  for (const [selector, attr, value] of updates) {
    const el = document.head.querySelector(selector);
    if (el) {
      el.setAttribute(attr, value);
    }
  }
}

syncMetadataUrls();
