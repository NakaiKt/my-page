import {
  BookOpen,
  Bubbles,
  Car,
  Code,
  Coffee,
  Gamepad2,
  Github,
  MessageCircle,
  Palette,
  Target,
  Tent,
  Zap,
} from "lucide-react";
import type {
  AboutFeature,
  FavoriteHighlight,
  SkillBadge,
  SocialLink,
  VisionContent,
} from "../models/userInfo.model";

const VISION: VisionContent = {
  headline:
    "子どもたちが楽しんで学校に行ってほしい。\nそんな学校であってほしい。",
  description:
    "生徒は学校に行くことが楽しい、学ぶことが楽しい。\n親は子の成長が楽しみで、先生はどんなことを教えようかと思いを巡らせる。\nそして、それに関わる地域の人、事務員の人、企業、団体。\n様々な人たちが楽しみを持つようになってほしいと思っています。",
};

const ABOUT_FEATURES: readonly AboutFeature[] = [
  {
    icon: Code,
    title: "フルスタック開発",
    description:
      "フロントエンド（React/TypeScript）からバックエンド（Python/AWS）、UXデザイン（Figma/Miro）まで一貫した開発が可能です。技術的な実装とユーザー体験の両方を考慮し、Vue2からReactへの移行やAPI設計など幅広い領域で実績があります。",
    transitionDelayClass: "delay-0",
  },
  {
    icon: Zap,
    title: "パフォーマンス最適化",
    description:
      "アルゴリズム検討により実行時間を1/2、解像度を10倍に改善した実績があります。リファクタリングとアーキテクチャ設計により、保守性と効率性を両立させることを重視しています。",
    transitionDelayClass: "delay-100",
  },
  {
    icon: Target,
    title: "チームリーダーシップ",
    description:
      "認定スクラムマスターとしてアジャイル開発を推進。コードレビュー文化の導入やツール導入の説明会主催など、一人ひとりのパフォーマンスを最大限に引き出せるチーム作りに価値を感じています。",
    transitionDelayClass: "delay-200",
  },
  {
    icon: Palette,
    title: "ユーザー中心設計",
    description:
      "ペルソナ設計からユーザージャーニー作成、プロトタイピングまで実践。お客様ヒアリングを基に0から機能設計を行うなど、華美な装飾を避けシンプルで使いやすいデザインでユーザー価値の最大化を目指します。",
    transitionDelayClass: "delay-300",
  },
];

const FAVORITES: readonly FavoriteHighlight[] = [
  {
    icon: Coffee,
    title: "コーヒー",
    description: "推しのカフェから豆買ってしとしとドリップ",
    transitionDelayClass: "delay-0",
  },
  {
    icon: BookOpen,
    title: "読書",
    description:
      "ふらっと書店によっては気になった本をさらっています。本の木は作らないように",
    transitionDelayClass: "delay-75",
  },
  {
    icon: Car,
    title: "ドライブ",
    description: "運転すること自体が好き！たまにちょっと遠回り",
    transitionDelayClass: "delay-150",
  },
  {
    icon: Gamepad2,
    title: "ゲーム",
    description:
      "FF9やTypeMoonなど、ストーリーや世界観を楽しむゲームが至高です",
    transitionDelayClass: "delay-0",
  },
  {
    icon: Tent,
    title: "キャンプ",
    description: "設営しながら飲むビールがいっちゃんうまい",
    transitionDelayClass: "delay-75",
  },
  {
    icon: Bubbles,
    title: "温泉＆岩盤浴",
    description: "月数回、温泉や岩盤浴で溶けてます",
    transitionDelayClass: "delay-150",
  },
];

export const SKILL_BADGES: readonly SkillBadge[] = [
  {
    name: "React",
    gradientClass: "from-cyan-500 to-blue-500",
  },
  {
    name: "TypeScript",
    gradientClass: "from-blue-500 to-indigo-500",
  },
  {
    name: "Next.js",
    gradientClass: "from-gray-700 to-gray-900",
  },
  {
    name: "Tailwind CSS",
    gradientClass: "from-cyan-400 to-teal-500",
  },
  {
    name: "Storybook",
    gradientClass: "from-purple-500 to-pink-500",
  },
  {
    name: "UXデザイン",
    gradientClass: "from-amber-500 to-orange-500",
  },
  {
    name: "Python",
    gradientClass: "from-blue-500 to-yellow-500",
  },
  {
    name: "Git",
    gradientClass: "from-red-500 to-orange-500",
  },
  {
    name: "Docker",
    gradientClass: "from-blue-500 to-cyan-500",
  },
  {
    name: "AWS",
    gradientClass: "from-amber-500 to-gray-900",
  },
  {
    name: "VS Code",
    gradientClass: "from-cyan-600 to-blue-600",
  },
  {
    name: "Github Copilot",
    gradientClass: "from-slate-700 to-slate-900",
  },
  {
    name: "Cursor",
    gradientClass: "from-zinc-500 to-zinc-700",
  },
  {
    name: "Miro",
    gradientClass: "from-yellow-700 to-slate-500",
  },
  {
    name: "Notion",
    gradientClass: "from-neutral-500 to-neutral-700",
  },
  {
    name: "claude code",
    gradientClass: "from-amber-500 to-amber-700",
  },
];

export const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    icon: Github,
    href: "https://github.com/NakaiKt",
    label: "GitHub",
    hoverClass: "hover:bg-gray-900",
  },
  {
    icon: MessageCircle,
    href: "https://www.wantedly.com/id/katsuhiro_nakai_c",
    label: "Wantedly",
    hoverClass: "hover:bg-gray-900",
  },
];

export const USER_INFO = {
  VISION,
  ABOUT_FEATURES,
  FAVORITES,
  SKILL_BADGES,
  SOCIAL_LINKS,
};
