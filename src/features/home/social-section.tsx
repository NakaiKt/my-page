import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { USER_INFO } from "@/lib/constants/userInfo";

import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { SectionVisibilityProps } from "./home-section.model";

export default function SocialSection({ isVisible }: SectionVisibilityProps) {
  return (
    <section id="social" data-animate="true">
      <SectionTitle title="Connect" />
      <div className="flex justify-center gap-6">
        {USER_INFO.SOCIAL_LINKS.map((social) => {
          const Icon = social.icon;

          return (
            <Tooltip key={social.label}>
              <TooltipTrigger>
                <Button
                  key={social.label}
                  variant="outline"
                  size="icon"
                  className={cn(
                    "size-16 group relative rounded-2xl border-2 border-gray-200 transition duration-1000 hover:scale-110 hover:shadow-2xl bg-white overflow-hidden",
                    social.hoverClass,
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-20",
                  )}
                  asChild
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="size-7 text-gray-700 transition-colors group-hover:text-white" />
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>{social.label}</TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </section>
  );
}
