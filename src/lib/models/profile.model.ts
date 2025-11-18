import type { LucideIcon } from "lucide-react";

export interface BasicInfo {
  name: string;
  nameKana: string;
  phone: string;
  email: string;
  address: string;
}

export interface EducationHistory {
  id: number;
  year: number;
  month: number;
  institution: string;
  department?: string;
  status: "入学" | "卒業" | "修了";
}

export interface CareerHistory {
  id: number;
  year: number;
  month: number;
  company: string;
  status: "入社" | "退社";
}

export interface ProfileSection {
  icon: LucideIcon;
  title: string;
  description: string;
}
