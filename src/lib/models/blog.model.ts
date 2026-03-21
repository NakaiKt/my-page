export type BlogPlatform = "note" | "zenn";

export interface BlogArticle {
  title: string;
  link: string;
  publishedAt: string;
  description: string;
  thumbnail?: string;
  platform: BlogPlatform;
  isPinned?: boolean;
}
