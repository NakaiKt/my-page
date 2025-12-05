"use client";

import { ExternalLink, Github } from "lucide-react";
import { useEffect, useState } from "react";

import SectionTitle from "@/components/SectionTitle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  OTHER_CONTRIBUTIONS,
  PERSONAL_ACHIEVEMENTS,
} from "@/lib/constants/achievements";

export default function AchievementsPage() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set()
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setVisibleSections((prev) => {
              if (prev.has(sectionId)) {
                return prev;
              }
              const next = new Set(prev);
              next.add(sectionId);
              return next;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements =
      document.querySelectorAll<HTMLElement>("[data-animate]");
    animatedElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="py-20 max-w-6xl mx-auto space-y-20">
      {/* Personal Projects */}
      <section id="personal-projects" data-animate>
        <SectionTitle
          title="個人プロジェクト"
          description="Personal Projects"
        />
        <div
          className={`transition-all duration-1000 ${
            visibleSections.has("personal-projects")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PERSONAL_ACHIEVEMENTS.length > 0 ? (
              PERSONAL_ACHIEVEMENTS.map((achievement, index) => (
                <Card
                  key={achievement.id}
                  className={`p-6 hover:shadow-xl transition-all duration-300 delay-${index * 100}`}
                >
                  <div className="space-y-4">
                    {/* Icon and Period */}
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg">
                        <achievement.icon className="w-6 h-6 text-white" />
                      </div>
                      {achievement.period && (
                        <span className="text-sm text-gray-500">
                          {achievement.period}
                        </span>
                      )}
                    </div>

                    {/* Title and Description */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {achievement.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Links */}
                    {achievement.links && (
                      <div className="flex gap-2 pt-2">
                        {achievement.links.github && (
                          <Button
                            variant="outline"
                            size="sm"
                            asChild
                            className="flex-1"
                          >
                            <a
                              href={achievement.links.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              <Github className="w-4 h-4" />
                              <span>GitHub</span>
                            </a>
                          </Button>
                        )}
                        {achievement.links.page && (
                          <Button
                            variant="outline"
                            size="sm"
                            asChild
                            className="flex-1"
                          >
                            <a
                              href={achievement.links.page}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              <ExternalLink className="w-4 h-4" />
                              <span>Page</span>
                            </a>
                          </Button>
                        )}
                      </div>
                    )}
                  </div>
                </Card>
              ))
            ) : (
              <div className="col-span-2">
                <Card className="p-12 text-center">
                  <p className="text-gray-500">個人プロジェクトは準備中です</p>
                </Card>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Other Contributions */}
      {OTHER_CONTRIBUTIONS.length > 0 && (
        <section id="other-contributions" data-animate>
          <SectionTitle
            title="その他の活動"
            description="Other Contributions"
          />
          <div
            className={`transition-all duration-1000 delay-200 ${
              visibleSections.has("other-contributions")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {OTHER_CONTRIBUTIONS.map((contribution, index) => (
                <Card
                  key={contribution.id}
                  className={`p-6 hover:shadow-xl transition-all duration-300 delay-${index * 100}`}
                >
                  <div className="space-y-4">
                    {/* Icon and Period */}
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                        <contribution.icon className="w-6 h-6 text-white" />
                      </div>
                      {contribution.period && (
                        <span className="text-sm text-gray-500">
                          {contribution.period}
                        </span>
                      )}
                    </div>

                    {/* Title and Description */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {contribution.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {contribution.description}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {contribution.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Links */}
                    {contribution.links && (
                      <div className="flex gap-2 pt-2">
                        {contribution.links.github && (
                          <Button
                            variant="outline"
                            size="sm"
                            asChild
                            className="flex-1"
                          >
                            <a
                              href={contribution.links.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              <Github className="w-4 h-4" />
                              <span>GitHub</span>
                            </a>
                          </Button>
                        )}
                        {contribution.links.article && (
                          <Button
                            variant="outline"
                            size="sm"
                            asChild
                            className="flex-1"
                          >
                            <a
                              href={contribution.links.article}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              <ExternalLink className="w-4 h-4" />
                              <span>記事</span>
                            </a>
                          </Button>
                        )}
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
