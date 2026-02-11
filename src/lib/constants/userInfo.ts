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
    "子どもたちが楽しんで学校に行ってほしい。\nそれができる学校であってほしい。",
  description:
    "生徒は学校に行くことが楽しい。学ぶこと、関わること、成長することに貪欲に楽しみを見出してほしい。\
    \n親や先生はもちろん、それに関わる地域の人、事務員、企業、団体、すべての人が子供の成長に楽しみを見出してほしい。\
    \n教育とは「人格の完成を目指し、平和で民主的な国家及び社会の形成者として必要な資質を備えた心身ともに健康な国民の育成※１」を目標とするもの。\
    \n決して勉強だけでなく、子どもたちが楽しみを見出し、自分で未来を選択できるようになってほしいと願っています。\
    \n\n※１：教育基本法より",
};

const ABOUT_FEATURES: readonly AboutFeature[] = [
  {
    icon: Code,
    title: "フルスタック開発",
    description:
      "フロントエンド（React/TypeScript）からバックエンド（Python/AWS）まで一貫した開発が可能です。現在SQLも勉強中です。",
    transitionDelayClass: "delay-0",
  },
  {
    icon: Target,
    title: "チーム作り",
    description:
      "認定スクラムマスターとしてアジャイルマインドを推進。コードレビュー文化の導入やツール導入の説明会主催、勉強会の主催。「いい製品はいいチームから」を信条に、一人ひとりのパフォーマンスを最大限に引き出せるチーム作りを大事にします。",
    transitionDelayClass: "delay-200",
  },
  {
    icon: Palette,
    title: "ユーザー中心設計",
    description:
      "ペルソナ設計からユーザージャーニー作成、プロトタイピングまで実践。お客様ヒアリングを基に0からの機能設計も経験。シンプルで使いやすいデザインでユーザー価値の最大化を目指します。",
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
    name: "Python",
    gradientClass: "from-blue-500 to-yellow-500",
  },
  {
    name: "Next.js / React",
    gradientClass: "from-cyan-500 to-blue-500",
  },
  {
    name: "TypeScript",
    gradientClass: "from-blue-500 to-indigo-500",
  },
  {
    name: "Tailwind CSS",
    gradientClass: "from-cyan-400 to-teal-500",
  },
  {
    name: "AWS Lambda",
    gradientClass: "from-amber-500 to-gray-900",
  },
  {
    name: "AWS S3",
    gradientClass: "from-amber-500 to-gray-900",
  },
  {
    name: "AWS DynamoDB",
    gradientClass: "from-amber-500 to-gray-900",
  },
  {
    name: "Notion",
    gradientClass: "from-neutral-500 to-neutral-700",
  },
  {
    name: "VS Code",
    gradientClass: "from-cyan-600 to-blue-600",
  },
  {
    name: "Miro",
    gradientClass: "from-yellow-700 to-slate-500",
  },
  {
    name: "Docker",
    gradientClass: "from-blue-500 to-cyan-500",
  },
  {
    name: "Github Copilot",
    gradientClass: "from-slate-700 to-slate-900",
  },
  {
    name: "APIDog",
    gradientClass: "from-green-500 to-green-700",
  },
  {
    name: "Obsidian",
    gradientClass: "from-gray-500 to-gray-700",
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
