import type { LucideIcon } from "lucide-react";

import { FC, SVGProps } from "react";

export interface VisionContent {
  readonly headline: string;
  readonly description: string;
}

export interface AboutFeature {
  readonly icon: LucideIcon;
  readonly title: string;
  readonly description: string;
  readonly transitionDelayClass: string;
}

export interface FavoriteHighlight {
  readonly icon: LucideIcon;
  readonly title: string;
  readonly description: string;
  readonly transitionDelayClass: string;
}

export interface SkillBadge {
  readonly name: string;
  readonly gradientClass: string;
}

export interface SocialLink {
  readonly icon: LucideIcon | FC<SVGProps<SVGSVGElement>>;
  readonly href: string;
  readonly label: string;
  readonly hoverClass: string;
}
