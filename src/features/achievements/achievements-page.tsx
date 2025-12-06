"use client";

import { useEffect, useState } from "react";

import PersonalProjectsSection from "./personal-projects-section";
import PublicationsSection from "./publications-section";

type AchievementSectionId = "personal-projects" | "publications";

const ACHIEVEMENT_SECTION_IDS: readonly AchievementSectionId[] = [
  "personal-projects",
  "publications",
] as const;

export default function AchievementsPage() {
  const [visibleSections, setVisibleSections] = useState<
    Set<AchievementSectionId>
  >(() => new Set());

  function isAchievementSectionId(
    value: string
  ): value is AchievementSectionId {
    return ACHIEVEMENT_SECTION_IDS.includes(value as AchievementSectionId);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const sectionId = entry.target.id;
          if (!isAchievementSectionId(sectionId)) {
            return;
          }

          setVisibleSections((prev) => {
            if (prev.has(sectionId)) {
              return prev;
            }

            const next = new Set(prev);
            next.add(sectionId);
            return next;
          });
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll<HTMLElement>(
      'section[data-animate="true"]'
    );
    animatedElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const isSectionVisible = (sectionId: AchievementSectionId): boolean => {
    return visibleSections.has(sectionId);
  };

  return (
    <div className="py-20 max-w-6xl mx-auto space-y-20">
      <PersonalProjectsSection
        isVisible={isSectionVisible("personal-projects")}
      />
      <PublicationsSection isVisible={isSectionVisible("publications")} />
    </div>
  );
}
