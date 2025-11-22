import type { LucideIcon } from "lucide-react";

export interface Achievement {
  id: number;
  title: string;
  description: string;
  tags: readonly string[];
  icon: LucideIcon;
  links?: {
    github?: string;
    demo?: string;
    article?: string;
  };
  image?: string;
  period?: string;
}

export interface AchievementCategory {
  id: string;
  title: string;
  description: string;
  achievements: readonly Achievement[];
}
