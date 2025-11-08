import type { Metadata } from "next";
import ExperiencePage from "@/features/experience/experience-page";

export const metadata: Metadata = {
  title: "Experience | Portfolio",
  description: "これまでに携わってきたプロジェクトと、そこで得た経験",
};

export default function Experience() {
  return <ExperiencePage />;
}
