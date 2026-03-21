import { fetchRSSFeed, RSS_FEEDS } from "@/lib/rss";

import BlogFeedClient from "./blog-feed-client";

export default async function BlogPage() {
  const [noteArticles, zennArticles] = await Promise.all([
    fetchRSSFeed(RSS_FEEDS.note, "note"),
    fetchRSSFeed(RSS_FEEDS.zenn, "zenn"),
  ]);

  return (
    <BlogFeedClient
      noteArticles={noteArticles}
      zennArticles={zennArticles}
    />
  );
}
