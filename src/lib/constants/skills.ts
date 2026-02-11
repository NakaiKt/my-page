import { Code, Palette, PencilRuler, Wrench } from "lucide-react";
import type { Certification, SkillCategory } from "../models/skills.model";

export const SKILL_CATEGORIES: readonly SkillCategory[] = [
  {
    id: 1,
    category: "言語・フレームワーク",
    icon: Code,
    gradientClass: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Python", years: 5, isMain: true },
      { name: "TypeScript", years: 2, isMain: true },
      { name: "Next.js", years: 2, isMain: true },
      { name: "React", year: 2, isMain: true },
      { name: "Tailwind CSS", years: 2, isMain: true },
      { name: "Vue.js", years: 1, isMain: false },
      { name: "Node.js", years: 1, isMain: false },
    ],
  },
  {
    id: 2,
    category: "クラウド・インフラ",
    icon: Wrench,
    gradientClass: "from-yellow-600 to-amber-500",
    skills: [
      { name: "AWS Lambda", years: 3, isMain: true },
      { name: "AWS S3", years: 3, isMain: true },
      { name: "AWS DynamoDB", years: 3, isMain: true },
      { name: "Docker", years: 2, isMain: true },
      { name: "AWS IoT", years: 1, isMain: false },
      { name: "AWS EC2", years: 1, isMain: false },
      { name: "AWS Bedrock", years: 1, isMain: false },
      { name: "CircleCI", years: 1, isMain: false },
      { name: "GitHub Actions", years: 2, isMain: false },
      { name: "vercel", years: 1, isMain: false },
      { name: "Terraform", years: 1, isMain: false },
      { name: "PosgreSQL", years: 1, ismain: false },
    ],
  },
  {
    id: 3,
    category: "デザイン・UX",
    icon: Palette,
    gradientClass: "from-purple-500 to-pink-500",
    skills: [
      { name: "プロトタイピング", years: 2, isMain: false },
      { name: "ペルソナ設計", years: 1, isMain: false },
      { name: "ユーザージャーニー", years: 1, isMain: false },
      { name: "UI/UXデザイン", years: 1, isMain: false },
      { name: "バイブコーディング", years: 1, isMain: false },
    ],
  },
  {
    id: 4,
    category: "開発ツール",
    icon: PencilRuler,
    gradientClass: "from-green-600 to-emerald-500",
    skills: [
      { name: "Notion", years: 5, isMain: true },
      { name: "VS Code", years: 5, isMain: true },
      { name: "Miro", years: 3, isMain: true },
      { name: "Docker", years: 3, isMain: true },
      { name: "Github Copilot", years: 2, isMain: true },
      { name: "APIDog", years: 2, isMain: true },
      { name: "Obsidian", years: 2, isMain: true },
      { name: "postman", years: 2, isMain: false },
      { name: "Figma", years: 2, isMain: false },
      { name: "Cursor", years: 1, isMain: false },
      { name: "claude code", years: 1, isMain: false },
      { name: "DBeaver", years: 1, isMain: false },
    ],
  },
];

export const CERTIFICATIONS: readonly Certification[] = [
  { name: "認定スクラムマスター", date: "2021年3月" },
];
