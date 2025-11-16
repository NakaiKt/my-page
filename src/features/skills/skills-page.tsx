"use client";

import { useEffect, useState } from "react";
import { Award, TrendingUp } from "lucide-react";

import SectionTitle from "@/components/SectionTitle";
import { Card } from "@/components/ui/card";
import {
  SKILL_CATEGORIES,
  STRENGTHS,
  CERTIFICATIONS,
} from "@/lib/constants/skills";
import StrengthCard from "./strength-card";
import SkillCategoryCard from "./skill-category-card";

export default function SkillsPage() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set(),
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
      { threshold: 0.1 },
    );

    const animatedElements = document.querySelectorAll<HTMLElement>(
      "[data-animate]",
    );
    animatedElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="py-20 max-w-6xl mx-auto space-y-20">
      {/* Strengths */}
      <section id="strengths" data-animate>
        <SectionTitle title="Strengths" description="強み・特徴" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {STRENGTHS.map((strength, index) => (
            <div
              key={strength.title}
              className={`transition-all duration-1000 delay-${index * 100} ${
                visibleSections.has("strengths")
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-20"
              }`}
            >
              <StrengthCard strength={strength} />
            </div>
          ))}
        </div>
      </section>

      {/* Technical Skills */}
      <section id="technical-skills" data-animate>
        <SectionTitle title="Technical Skills" description="技術スキル" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category, index) => (
            <div
              key={category.id}
              className={`transition-all duration-1000 delay-${index * 100} ${
                visibleSections.has("technical-skills")
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-20"
              }`}
            >
              <SkillCategoryCard category={category} />
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" data-animate>
        <SectionTitle title="Certifications" description="資格・認定" />
        <div
          className={`transition-all duration-1000 ${
            visibleSections.has("certifications")
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-20"
          }`}
        >
          <Card className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.name}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-gray-900 mb-1">
                      {cert.name}
                    </h4>
                    <p className="text-sm text-gray-600">{cert.date} 取得</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Learning */}
      <section id="learning" data-animate>
        <div
          className={`transition-all duration-1000 ${
            visibleSections.has("learning")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 p-10 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-full blur-3xl" />
            <div className="relative">
              <div className="inline-flex p-4 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                <TrendingUp className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                継続的な学習
              </h3>
              <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
                技術の進化は早く、常に学び続ける必要があります。
                新しいフレームワーク、デザイン手法、開発プロセスを積極的に学び、
                プロジェクトに活かすことで、より良いプロダクト作りに貢献しています。
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
