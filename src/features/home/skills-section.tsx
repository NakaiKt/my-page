import { USER_INFO } from "@/lib/constants/userInfo";

import SectionTitle from "@/components/SectionTitle";
import { Badge } from "@/components/ui/badge";
import type { SectionVisibilityProps } from "./home-section.model";

export default function SkillsSection({ isVisible }: SectionVisibilityProps) {
  return (
    <section id="skills" data-animate="true">
      <SectionTitle title="Tech Stack" />
      <div
        className={`relative transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
        }`}
      >
        <div className="relative flex flex-wrap justify-center gap-4 p-8">
          {USER_INFO.SKILL_BADGES.map((skill) => (
            <Badge
              key={skill.name}
              className={`bg-gradient-to-r ${skill.gradientClass} border-none px-6 py-3 text-sm font-semibold text-white shadow-sm`}
            >
              <span className="flex items-center gap-2">
                <span
                  className="h-2 w-2 rounded-full bg-white/80"
                  aria-hidden
                />
                {skill.name}
              </span>
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
