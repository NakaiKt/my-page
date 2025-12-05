import { USER_INFO } from "@/lib/constants/userInfo";

import SectionTitle from "@/components/SectionTitle";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { SectionVisibilityProps } from "./home-section.model";

export default function SkillsSection({ isVisible }: SectionVisibilityProps) {
  return (
    <section id="skills" data-animate="true">
      <SectionTitle title="Tech Stack" />
      <div
        className={`relative transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
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
      <div className="mt-8 flex justify-center">
        <Link
          href="/skills"
          className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg hover:scale-105"
        >
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          <span>スキル</span>
        </Link>
      </div>
    </section>
  );
}
