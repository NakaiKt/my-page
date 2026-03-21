"use client";

import { useEffect, useState } from "react";

import { Rss } from "lucide-react";

import SectionTitle from "@/components/SectionTitle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { BlogArticle } from "@/lib/models/blog.model";
import { cn, getSlideUpAnimation } from "@/lib/utils";

import BlogArticleCard from "./blog-article-card";

type Props = {
  readonly noteArticles: BlogArticle[];
  readonly zennArticles: BlogArticle[];
};

export default function BlogFeedClient({ noteArticles, zennArticles }: Props) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("blog-feed");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="py-20 max-w-3xl mx-auto">
      <section
        id="blog-feed"
        data-animate="true"
        className={getSlideUpAnimation(isVisible)}
      >
        <SectionTitle
          title="ブログ"
          description="note・Zennに投稿した記事"
        />

        <Tabs defaultValue="note" className="w-full">
          <TabsList className="w-full h-12 bg-white border border-gray-200 rounded-xl p-1">
            <TabsTrigger
              value="note"
              className={cn(
                "flex-1 h-full rounded-lg text-sm font-semibold transition-all",
                "data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-500 data-[state=active]:to-orange-500 data-[state=active]:text-white data-[state=active]:shadow-md"
              )}
            >
              note
              {noteArticles.length > 0 && (
                <span className="ml-1.5 text-xs opacity-80">
                  ({noteArticles.length})
                </span>
              )}
            </TabsTrigger>
            <TabsTrigger
              value="zenn"
              className={cn(
                "flex-1 h-full rounded-lg text-sm font-semibold transition-all",
                "data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-500 data-[state=active]:to-orange-500 data-[state=active]:text-white data-[state=active]:shadow-md"
              )}
            >
              Zenn
              {zennArticles.length > 0 && (
                <span className="ml-1.5 text-xs opacity-80">
                  ({zennArticles.length})
                </span>
              )}
            </TabsTrigger>
          </TabsList>

          <div className="mt-4 bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
            <TabsContent value="note">
              <FeedList articles={noteArticles} platform="note" />
            </TabsContent>
            <TabsContent value="zenn">
              <FeedList articles={zennArticles} platform="zenn" />
            </TabsContent>
          </div>
        </Tabs>
      </section>
    </div>
  );
}

function FeedList({
  articles,
  platform,
}: {
  readonly articles: BlogArticle[];
  readonly platform: string;
}) {
  if (articles.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-gray-400">
        <Rss className="w-10 h-10 mb-3 opacity-50" />
        <p className="text-sm">記事を読み込めませんでした</p>
        <a
          href={
            platform === "note"
              ? "https://note.com/k_nakai_ks"
              : "https://zenn.dev/kts_4"
          }
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 text-sm text-amber-500 hover:text-amber-600 underline underline-offset-2"
        >
          直接サイトを見る
        </a>
      </div>
    );
  }

  return (
    <div>
      {articles.map((article) => (
        <BlogArticleCard key={article.link} article={article} />
      ))}
    </div>
  );
}
