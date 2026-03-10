import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { USER_INFO } from "@/lib/constants/userInfo";

import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { cn, getSlideUpAnimation } from "@/lib/utils";

interface RelatedLinksSectionProps {
  isVisible: boolean;
}

export default function RelatedLinksSection({
  isVisible,
}: RelatedLinksSectionProps) {
  return (
    <section id="related-links" data-animate="true">
      <SectionTitle title="関連リンク" description="Related Links" />
      <div className="flex justify-center gap-6">
        {USER_INFO.RELATED_LINKS.map((social) => {
          const Icon = social.icon;

          return (
            <Tooltip key={social.label}>
              <TooltipTrigger>
                <Button
                  variant="outline"
                  size="icon"
                  className={cn(
                    "size-16 group relative rounded-2xl border-2 border-gray-200 transition duration-1000 hover:scale-110 hover:shadow-2xl bg-white overflow-hidden",
                    social.hoverClass,
                    getSlideUpAnimation(isVisible),
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
