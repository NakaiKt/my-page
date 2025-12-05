import ArrowButton from "@/components/ArrowButton";
import SectionTitle from "@/components/SectionTitle";
import { Badge } from "@/components/ui/badge";
import { USER_INFO } from "@/lib/constants/userInfo";
import { getSlideUpAnimation } from "@/lib/utils";
import type { SectionVisibilityProps } from "./home-section.model";

export default function SkillsSection({ isVisible }: SectionVisibilityProps) {
  return (
    <section id="skills" data-animate="true">
      <SectionTitle
        title="主要スキル・開発ツール"
        description="個人開発含めメインで使用しているスキル・開発ツール"
      />
      <div className={`relative ${getSlideUpAnimation(isVisible)}`}>
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
      <ArrowButton href="/skills" text="スキル" />
    </section>
  );
}
