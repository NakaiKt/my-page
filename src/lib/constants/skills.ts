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
      { name: "React", years: 3, level: "advanced" },
      { name: "TypeScript", years: 3, level: "advanced" },
      { name: "Next.js", years: 2, level: "advanced" },
      { name: "JavaScript", years: 4, level: "advanced" },
      { name: "Vue.js", years: 2, level: "intermediate" },
      { name: "Python", years: 2, level: "intermediate" },
      { name: "HTML/CSS", years: 4, level: "advanced" },
      { name: "Tailwind CSS", years: 2, level: "advanced" },
    ],
  },
  {
    id: 2,
    category: "デザイン・UX",
    icon: Palette,
    gradientClass: "from-purple-500 to-pink-500",
    skills: [
      { name: "Figma", years: 3, level: "advanced" },
      { name: "Adobe XD", years: 2, level: "intermediate" },
      { name: "UXリサーチ", years: 2, level: "intermediate" },
      { name: "ユーザビリティテスト", years: 2, level: "intermediate" },
      { name: "情報設計", years: 3, level: "advanced" },
      { name: "プロトタイピング", years: 3, level: "advanced" },
      { name: "アクセシビリティ", years: 2, level: "intermediate" },
    ],
  },
  {
    id: 3,
    category: "開発ツール",
    icon: Wrench,
    gradientClass: "from-orange-500 to-amber-500",
    skills: [
      { name: "Git / GitHub", years: 4, level: "advanced" },
      { name: "Docker", years: 2, level: "intermediate" },
      { name: "VS Code", years: 4, level: "advanced" },
      { name: "Storybook", years: 2, level: "intermediate" },
      { name: "Jest", years: 2, level: "intermediate" },
      { name: "Playwright", years: 1, level: "beginner" },
    ],
  },
  {
    id: 4,
    category: "手法・マインドセット",
    icon: Target,
    gradientClass: "from-green-500 to-emerald-500",
    skills: [
      { name: "アジャイル開発", years: 3, level: "advanced" },
      { name: "スクラム", years: 2, level: "intermediate" },
      { name: "デザイン思考", years: 2, level: "intermediate" },
      { name: "ユーザーセンタード設計", years: 3, level: "advanced" },
      { name: "チーム開発", years: 4, level: "advanced" },
      { name: "ペアプログラミング", years: 2, level: "intermediate" },
    ],
  },
];

export const STRENGTHS: readonly Strength[] = [
  {
    icon: Layers,
    title: "技術とデザインの橋渡し",
    description:
      "エンジニアリングとUXデザインの両方の視点を持ち、実装可能性を考慮した設計ができます。",
    gradientClass: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "チームコラボレーション",
    description:
      "職種を超えた協働を得意とし、多様なメンバーと円滑にコミュニケーションが取れます。",
    gradientClass: "from-purple-500 to-pink-500",
  },
  {
    icon: TrendingUp,
    title: "継続的な学習姿勢",
    description:
      "新しい技術やデザイン手法を積極的に学び、プロジェクトに活かしています。",
    gradientClass: "from-green-500 to-emerald-500",
  },
  {
    icon: Zap,
    title: "ユーザーファースト",
    description:
      "常にユーザーの視点に立ち、本質的な価値を届けることを最優先に考えています。",
    gradientClass: "from-amber-500 to-orange-500",
  },
];

export const CERTIFICATIONS: readonly Certification[] = [
  { name: "基本情報技術者", date: "2021年10月" },
  { name: "応用情報技術者", date: "2022年10月" },
  { name: "TOEIC 850点", date: "2023年3月" },
  { name: "Google UX Design Certificate", date: "2022年5月" },
];
