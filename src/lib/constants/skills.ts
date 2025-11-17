import {
  Code,
  Palette,
  Wrench,
  Target,
  Layers,
  Users,
  TrendingUp,
  Zap,
} from "lucide-react";
import type {
  SkillCategory,
  Strength,
  Certification,
} from "../models/skills.model";

export const SKILL_CATEGORIES: readonly SkillCategory[] = [
  {
    id: 1,
    category: "言語・フレームワーク",
    icon: Code,
    gradientClass: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React", years: 2, level: "advanced" },
      { name: "TypeScript", years: 2, level: "advanced" },
      { name: "Next.js", years: 1, level: "intermediate" },
      { name: "JavaScript", years: 3, level: "advanced" },
      { name: "Vue.js", years: 1, level: "intermediate" },
      { name: "Python", years: 3, level: "advanced" },
      { name: "HTML/CSS", years: 3, level: "advanced" },
      { name: "Tailwind CSS", years: 2, level: "advanced" },
    ],
  },
  {
    id: 2,
    category: "クラウド・インフラ",
    icon: Wrench,
    gradientClass: "from-orange-500 to-amber-500",
    skills: [
      { name: "AWS Lambda", years: 2, level: "advanced" },
      { name: "AWS IoT", years: 1, level: "intermediate" },
      { name: "AWS S3", years: 2, level: "advanced" },
      { name: "AWS DynamoDB", years: 2, level: "intermediate" },
      { name: "AWS EC2", years: 1, level: "intermediate" },
      { name: "AWS Bedrock", years: 1, level: "intermediate" },
      { name: "Azure OpenAI", years: 1, level: "intermediate" },
      { name: "Docker", years: 2, level: "intermediate" },
      { name: "CircleCI", years: 1, level: "intermediate" },
    ],
  },
  {
    id: 3,
    category: "デザイン・UX",
    icon: Palette,
    gradientClass: "from-purple-500 to-pink-500",
    skills: [
      { name: "Figma", years: 2, level: "advanced" },
      { name: "Miro", years: 2, level: "advanced" },
      { name: "UXリサーチ", years: 1, level: "intermediate" },
      { name: "ペルソナ設計", years: 1, level: "intermediate" },
      { name: "ユーザージャーニー", years: 1, level: "intermediate" },
      { name: "情報設計", years: 2, level: "advanced" },
      { name: "プロトタイピング", years: 2, level: "advanced" },
      { name: "UI/UXデザイン", years: 2, level: "advanced" },
    ],
  },
  {
    id: 4,
    category: "手法・マインドセット",
    icon: Target,
    gradientClass: "from-green-500 to-emerald-500",
    skills: [
      { name: "アジャイル開発", years: 3, level: "advanced" },
      { name: "スクラム", years: 3, level: "advanced" },
      { name: "ドメイン駆動設計", years: 1, level: "intermediate" },
      { name: "リファクタリング", years: 2, level: "advanced" },
      { name: "コードレビュー", years: 2, level: "advanced" },
      { name: "チーム開発", years: 3, level: "advanced" },
      { name: "RESTful API設計", years: 2, level: "intermediate" },
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
      "認定スクラムマスターとしてアジャイル開発を推進。コードレビュー文化の導入、ツール導入の説明会主催など、チームの成長を促進する活動を実践しています。",
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
