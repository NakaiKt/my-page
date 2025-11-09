"use client";

import { useEffect, useState } from "react";

import SectionTitle from "@/components/SectionTitle";
import { EXPERIENCES } from "@/lib/constants/experience";
import CompanyTitle from "./CompanyTitle";
import ExperienceCard from "./experience-card";

const TRANSITION_DELAYS = ["delay-0", "delay-100", "delay-200", "delay-300"];

export default function ExperiencePage() {
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

    const section = document.querySelector('[data-animate="true"]');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="py-20 max-w-4xl mx-auto">
      <section data-animate="true">
        <SectionTitle
          title="職務経歴"
          description="これまでに携わってきたプロジェクトと、そこで得た経験をご紹介します"
        />
        <div className="space-y-6">
          {EXPERIENCES.map((experience, index) => {
            const { experiences, ...company } = experience;

            // startで降順ソート
            const sortedExperiences = experiences.sort((a, b) => {
              if (a.start.year === b.start.year) {
                return a.start.month - b.start.month;
              }
              return b.start.year - a.start.year;
            });

            const companyStart = `${sortedExperiences[sortedExperiences.length - 1].start.year}年${sortedExperiences[sortedExperiences.length - 1].start.month}月`;
            const companyEnd = sortedExperiences[0].end
              ? `${sortedExperiences[0].end.year}年${sortedExperiences[0].end.month}月`
              : "現在";
            const period = `${companyStart} 〜 ${companyEnd}`;

            return (
              <>
                <CompanyTitle companyName={company.name} period={period} />
                {sortedExperiences.map((experience) => (
                  <ExperienceCard
                    key={experience.id}
                    experience={experience}
                    isVisible={isVisible}
                    transitionDelay={
                      TRANSITION_DELAYS[index % TRANSITION_DELAYS.length]
                    }
                  />
                ))}
              </>
            );
          })}
        </div>
      </section>
    </div>
  );
}
