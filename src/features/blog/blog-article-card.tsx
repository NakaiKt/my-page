import { ExternalLink, Pin } from "lucide-react";

import NoteIcon from "@/components/icons/note-icon";
import ZennIcon from "@/components/icons/zenn-icon";
import type { BlogArticle } from "@/lib/models/blog.model";
import { cn } from "@/lib/utils";

function formatRelativeDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "今日";
  if (diffDays === 1) return "昨日";
  if (diffDays < 7) return `${diffDays}日前`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)}週間前`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)}ヶ月前`;
  return `${Math.floor(diffDays / 365)}年前`;
}

type Props = {
  readonly article: BlogArticle;
  readonly className?: string;
};

export default function BlogArticleCard({ article, className }: Props) {
  const PlatformIcon = article.platform === "note" ? NoteIcon : ZennIcon;
  const platformName = article.platform === "note" ? "note" : "Zenn";
  const platformColor =
    article.platform === "note" ? "text-green-600" : "text-blue-500";

  return (
    <a
      href={article.link}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "block group",
        className
      )}
    >
      <div className="border-b border-gray-200 px-4 py-4 transition-colors duration-200 hover:bg-amber-50/50">
        <div className="flex gap-3">
          {/* Platform icon */}
          <div
            className={cn(
              "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center",
              article.platform === "note"
                ? "bg-green-100"
                : "bg-blue-100"
            )}
          >
            <PlatformIcon className={cn("w-5 h-5", platformColor)} />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            {/* Header: platform name + date + pinned badge */}
            <div className="flex items-center gap-2 mb-1">
              <span className={cn("text-sm font-bold", platformColor)}>
                {platformName}
              </span>
              <span className="text-gray-400 text-sm">·</span>
              <span className="text-gray-500 text-sm">
                {article.publishedAt
                  ? formatRelativeDate(article.publishedAt)
                  : ""}
              </span>
              {article.isPinned && (
                <span className="inline-flex items-center gap-0.5 text-xs font-medium text-amber-600 bg-amber-100 px-1.5 py-0.5 rounded-full">
                  <Pin className="w-3 h-3" />
                  固定
                </span>
              )}
            </div>

            {/* Title */}
            <h3 className="text-gray-900 font-semibold text-base leading-snug mb-1 group-hover:text-amber-600 transition-colors duration-200">
              {article.title}
            </h3>

            {/* Description */}
            {article.description && (
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-2">
                {article.description}
              </p>
            )}

            {/* Thumbnail */}
            {article.thumbnail && (
              <div className="mt-2 rounded-xl overflow-hidden border border-gray-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={article.thumbnail}
                  alt={article.title}
                  className="w-full h-40 object-cover"
                />
              </div>
            )}

            {/* Footer */}
            <div className="flex items-center gap-1 mt-2 text-gray-400 text-xs group-hover:text-amber-500 transition-colors duration-200">
              <ExternalLink className="w-3.5 h-3.5" />
              <span>記事を読む</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
