import type { BlogArticle, BlogPlatform } from "@/lib/models/blog.model";

function extractTag(xml: string, tag: string): string {
  const cdataMatch = xml.match(
    new RegExp(`<${tag}><!\\[CDATA\\[([\\s\\S]*?)\\]\\]></${tag}>`)
  );
  if (cdataMatch) return cdataMatch[1].trim();

  const match = xml.match(
    new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`)
  );
  return match ? match[1].trim() : "";
}

function extractEnclosureUrl(itemXml: string): string | undefined {
  const match = itemXml.match(/<enclosure[^>]+url="([^"]+)"/);
  return match ? match[1] : undefined;
}

function extractMediaThumbnail(itemXml: string): string | undefined {
  const match = itemXml.match(/<media:thumbnail[^>]+url="([^"]+)"/);
  return match ? match[1] : undefined;
}

function parseItems(xml: string, platform: BlogPlatform): BlogArticle[] {
  const items: BlogArticle[] = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;

  while ((match = itemRegex.exec(xml)) !== null) {
    const itemXml = match[1];
    const title = extractTag(itemXml, "title");
    const link = extractTag(itemXml, "link");
    const pubDate = extractTag(itemXml, "pubDate");
    const description = extractTag(itemXml, "description")
      .replace(/<[^>]*>/g, "")
      .replace(/続きをみる|続きを見る|続きを読む/g, "")
      .trim()
      .slice(0, 200);
    const thumbnail =
      extractEnclosureUrl(itemXml) ?? extractMediaThumbnail(itemXml);

    if (title && link) {
      items.push({
        title,
        link,
        publishedAt: pubDate,
        description,
        thumbnail,
        platform,
      });
    }
  }

  return items;
}

export async function fetchRSSFeed(
  url: string,
  platform: BlogPlatform
): Promise<BlogArticle[]> {
  try {
    const response = await fetch(url, {
      next: { revalidate: 3600 },
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; PortfolioBot/1.0)",
      },
    });

    if (!response.ok) {
      console.error(`RSS fetch failed: ${url} - ${response.status}`);
      return [];
    }

    const xml = await response.text();
    return parseItems(xml, platform);
  } catch (error) {
    console.error(`RSS fetch error: ${url}`, error);
    return [];
  }
}

export const RSS_FEEDS = {
  note: "https://note.com/k_nakai_ks/rss",
  zenn: "https://zenn.dev/kts_4/feed",
} as const;

/** 固定記事のタイトル（部分一致で判定、これらの記事は常にフィード最上位に表示される） */
const PINNED_ARTICLE_TITLES: string[] = [
  "【はじめてではないnote】自己紹介",
];

/** 記事リストに固定フラグを付与し、固定記事を最上位にソートする */
export function applyPinnedArticles(articles: BlogArticle[]): BlogArticle[] {
  const marked = articles.map((article) => ({
    ...article,
    isPinned: PINNED_ARTICLE_TITLES.some((pinned) =>
      article.title.includes(pinned)
    ),
  }));
  return marked.sort((a, b) => {
    if (a.isPinned && !b.isPinned) return -1;
    if (!a.isPinned && b.isPinned) return 1;
    return 0;
  });
}
