"use client";

import { useEffect, useState } from "react";

import { USER_INFO } from "@/lib/constants/userInfo";
import AboutSection from "./about-section";
import FavoritesSection from "./favorites-section";
import HeroSection from "./hero-section";
import SkillsSection from "./skills-section";
import SocialSection from "./social-section";
import VisionSection from "./vision-section";

import { HOME_SECTION_IDS } from "@/lib/constants/home";
import type { HomeSectionId } from "@/lib/models/home.model";

export default function HomePage() {
  const [visibleSections, setVisibleSections] = useState<Set<HomeSectionId>>(
    () => new Set(),
  );

  function isHomeSectionId(value: string): value is HomeSectionId {
    return HOME_SECTION_IDS.includes(value as HomeSectionId);
  }

  // セクションが画面に表示されたときに、そのセクションを表示する
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const sectionId = entry.target.id;
          if (!isHomeSectionId(sectionId)) {
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
      { threshold: 0.1 },
    );

    const animatedElements = document.querySelectorAll<HTMLElement>(
      'section[data-animate="true"]',
    );
    animatedElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const isSectionVisible = (sectionId: HomeSectionId): boolean => {
    return visibleSections.has(sectionId);
  };

  return (
    <>
      <HeroSection />
      <div className="py-20 max-w-4xl mx-auto gap-20 flex flex-col">
        <VisionSection
          isVisible={isSectionVisible("vision")}
          vision={USER_INFO.VISION}
        />
        <AboutSection isVisible={isSectionVisible("about")} />
        <FavoritesSection isVisible={isSectionVisible("favorites")} />
        <SkillsSection isVisible={isSectionVisible("skills")} />
        <SocialSection isVisible={isSectionVisible("social")} />
      </div>
    </>
  );
}
