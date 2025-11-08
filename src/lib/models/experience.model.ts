import type { LucideIcon } from "lucide-react";

export interface ExperienceDetails {
  background: string;
  solution: string;
  results: string;
  collaboration: string;
}

export interface Experience {
  id: number;
  title: string;
  period: string;
  roles: string[];
  summary: string;
  icon: LucideIcon;
  tags: string[];
  details: ExperienceDetails;
}
