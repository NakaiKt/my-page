"use client";

import { useEffect, useState } from "react";

import SectionTitle from "@/components/SectionTitle";
import { EXPERIENCES } from "@/lib/constants/experience";
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
      { threshold: 0.1 },
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
          title="Experience"
          description="これまでに携わってきたプロジェクトと、そこで得た経験をご紹介します"
        />
        <div className="space-y-6">
          {EXPERIENCES.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              isVisible={isVisible}
              transitionDelay={TRANSITION_DELAYS[index % TRANSITION_DELAYS.length]}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
