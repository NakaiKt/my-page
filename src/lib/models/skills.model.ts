import type { LucideIcon } from "lucide-react";

export type SkillLevel = "advanced" | "intermediate" | "beginner";

export interface Skill {
  name: string;
  years: number;
  level: SkillLevel;
}

export interface SkillCategory {
  id: number;
  category: string;
  icon: LucideIcon;
  gradientClass: string;
  skills: Skill[];
}

export interface Strength {
  icon: LucideIcon;
  title: string;
  description: string;
  gradientClass: string;
}

export interface Certification {
  name: string;
  date: string;
}
