import { Code, Palette, PencilRuler, Wrench } from "lucide-react";
import type { Certification, SkillCategory } from "../models/skills.model";

export const SKILL_CATEGORIES: readonly SkillCategory[] = [
  {
    id: 1,
    category: "言語・フレームワーク",
    icon: Code,
    gradientClass: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Python", years: 5 },
      { name: "Next.js", years: 1 },
      { name: "React", years: 1 },
      { name: "TypeScript", years: 1 },
      { name: "Tailwind CSS", years: 1 },
      { name: "Vue.js", years: 1 },
      { name: "shadcn/ui", years: 1 },
    ],
  },
  {
    id: 2,
    category: "クラウド・インフラ",
    icon: Wrench,
    gradientClass: "from-yellow-600 to-amber-500",
    skills: [
      { name: "AWS Lambda", years: 2 },
      { name: "AWS S3", years: 2 },
      { name: "AWS DynamoDB", years: 2 },
      { name: "Docker", years: 2 },
      { name: "AWS IoT", years: 1 },
      { name: "AWS EC2", years: 1 },
      { name: "AWS Bedrock", years: 1 },
      { name: "CircleCI", years: 1 },
      { name: "GitHub Actions", years: 1 },
      { name: "vercel", years: 1 },
      { name: "Terraform", years: 1 },
    ],
  },
  {
    id: 3,
    category: "デザイン・UX",
    icon: Palette,
    gradientClass: "from-purple-500 to-pink-500",
    skills: [
      { name: "プロトタイピング", years: 2 },
      { name: "ペルソナ設計", years: 1 },
      { name: "ユーザージャーニー", years: 1 },
      { name: "UI/UXデザイン", years: 1 },
      { name: "バイブコーディング", years: 1 },
    ],
  },
  {
    id: 4,
    category: "開発ツール",
    icon: PencilRuler,
    gradientClass: "from-green-600 to-emerald-500",
    skills: [
      { name: "Notion", years: 5 },
      { name: "Miro", years: 3 },
      { name: "Github Copilot", years: 2 },
      { name: "APIDog", years: 2 },
      { name: "Obsidian", years: 2 },
      { name: "postman", years: 2 },
      { name: "Figma", years: 2 },
      { name: "Cursor", years: 1 },
      { name: "claude code", years: 1 },
    ],
  },
];

export const CERTIFICATIONS: readonly Certification[] = [
  { name: "認定スクラムマスター", date: "2021年3月" },
];
