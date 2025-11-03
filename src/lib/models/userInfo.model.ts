import type { LucideIcon } from "lucide-react";

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
    readonly emoji: string;
    readonly title: string;
    readonly description: string;
    readonly gradientClass: string;
    readonly transitionDelayClass: string;
  }
  
  export interface SkillBadge {
    readonly name: string;
    readonly gradientClass: string;
  }
  
  export interface SocialLink {
    readonly icon: LucideIcon;
    readonly href: string;
    readonly label: string;
    readonly hoverClass: string;
  }
  