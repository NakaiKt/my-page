"use client";

import { Award } from "lucide-react";
import { useEffect, useState } from "react";

import SectionTitle from "@/components/SectionTitle";
import { Card } from "@/components/ui/card";
import { CERTIFICATIONS, SKILL_CATEGORIES } from "@/lib/constants/skills";
import SkillCategoryCard from "./skill-category-card";

export default function SkillsPage() {
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
      {/* Technical Skills */}
      <section id="technical-skills" data-animate>
        <SectionTitle
          title="主要スキル・開発ツール"
          description="個人開発含めた主要な技術スキルと経験年数"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category, index) => (
            <div
              key={category.id}
              className={`transition-all duration-1000 delay-${index * 100} ${
                visibleSections.has("technical-skills")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
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
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-20"
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
    </div>
  );
}
