import type { Metadata } from "next";
import SkillsPage from "@/features/skills/skills-page";

export const metadata: Metadata = {
  title: "Skills | Portfolio",
  description: "これまでに習得したスキルと資格",
};

export default function Skills() {
  return <SkillsPage />;
}
