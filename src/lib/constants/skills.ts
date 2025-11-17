import {
  Code,
  Layers,
  Palette,
  PencilRuler,
  TrendingUp,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import type {
  Certification,
  SkillCategory,
  Strength,
} from "../models/skills.model";

export const SKILL_CATEGORIES: readonly SkillCategory[] = [
  {
    id: 1,
    category: "言語・フレームワーク",
    icon: Code,
    gradientClass: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Python", years: 5, level: "advanced" },
      { name: "Next.js", years: 1, level: "intermediate" },
      { name: "React", years: 1, level: "intermediate" },
      { name: "TypeScript", years: 1, level: "intermediate" },
      { name: "Tailwind CSS", years: 1, level: "intermediate" },
      { name: "Vue.js", years: 1, level: "beginner" },
      { name: "shadcn/ui", years: 1, level: "beginner" },
    ],
  },
  {
    id: 2,
    category: "クラウド・インフラ",
    icon: Wrench,
    gradientClass: "from-yellow-600 to-amber-500",
    skills: [
      { name: "AWS Lambda", years: 2, level: "intermediate" },
      { name: "AWS S3", years: 2, level: "intermediate" },
      { name: "AWS DynamoDB", years: 2, level: "intermediate" },
      { name: "Docker", years: 2, level: "intermediate" },
      { name: "AWS IoT", years: 1, level: "beginner" },
      { name: "AWS EC2", years: 1, level: "beginner" },
      { name: "AWS Bedrock", years: 1, level: "beginner" },
      { name: "CircleCI", years: 1, level: "beginner" },
      { name: "GitHub Actions", years: 1, level: "beginner" },
      { name: "vercel", years: 1, level: "beginner" },
      { name: "Terraform", years: 1, level: "beginner" },
    ],
  },
  {
    id: 3,
    category: "デザイン・UX",
    icon: Palette,
    gradientClass: "from-purple-500 to-pink-500",
    skills: [
      { name: "プロトタイピング", years: 2, level: "intermediate" },
      { name: "ペルソナ設計", years: 1, level: "beginner" },
      { name: "ユーザージャーニー", years: 1, level: "beginner" },
      { name: "UI/UXデザイン", years: 1, level: "beginner" },
      { name: "バイブコーディング", years: 1, level: "beginner" },
    ],
  },
  {
    id: 4,
    category: "開発ツール",
    icon: PencilRuler,
    gradientClass: "from-green-600 to-emerald-500",
    skills: [
      { name: "Notion", years: 5, level: "intermediate" },
      { name: "Miro", years: 3, level: "intermediate" },
      { name: "Github Copilot", years: 2, level: "intermediate" },
      { name: "APIDog", years: 2, level: "intermediate" },
      { name: "Obsidian", years: 2, level: "intermediate" },
      { name: "postman", years: 2, level: "intermediate" },
      { name: "Figma", years: 2, level: "beginner" },
      { name: "Cursor", years: 1, level: "beginner" },
      { name: "claude code", years: 1, level: "beginner" },
    ],
  },
];

export const STRENGTHS: readonly Strength[] = [
  {
    icon: Layers,
    title: "フルスタック開発",
    description:
      "フロントエンド（React/TypeScript）からバックエンド（Python/AWS）、UXデザイン（Figma/Miro）まで一貫した開発が可能です。Vue2からReactへの移行、API設計、インフラ構築など幅広い領域で実績があります。",
    gradientClass: "from-blue-500 to-cyan-500",
  },
  {
    icon: TrendingUp,
    title: "パフォーマンス最適化",
    description:
      "アルゴリズム検討により実行時間を1/2、解像度を10倍に改善。リファクタリングとアーキテクチャ設計により、保守性と効率性を両立させる技術力があります。",
    gradientClass: "from-green-500 to-emerald-500",
  },
  {
    icon: Users,
    title: "チームリーダーシップ",
    description:
      "認定スクラムマスターとしてアジャイルを推進。コードレビュー文化の導入、ツール導入の説明会主催など、チームの成長を促進する活動を実践しています。",
    gradientClass: "from-purple-500 to-pink-500",
  },
  {
    icon: Zap,
    title: "ユーザー中心設計",
    description:
      "ペルソナ設計からユーザージャーニー作成、プロトタイピングまで実践。お客様ヒアリングを基に「繋ぐ」機能を0から設計するなど、ユーザー価値を重視した開発を行います。",
    gradientClass: "from-amber-500 to-orange-500",
  },
];

export const CERTIFICATIONS: readonly Certification[] = [
  { name: "認定スクラムマスター", date: "2021年3月" },
];
