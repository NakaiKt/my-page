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
  Lightbulb,
} from "lucide-react";
import type {
  AboutFeature,
  FavoriteHighlight,
  SkillBadge,
  SocialLink,
  VisionContent,
} from "../models/userInfo.model";
import BlueskyIcon from "@/components/icons/bluesky-icon";
import NoteIcon from "@/components/icons/note-icon";
import ZennIcon from "@/components/icons/zenn-icon";

const VISION: VisionContent = {
  headline:
    "子どもたちが学ぶことを楽しみ、\n人と関わることを楽しみ、\nそして自由な大人に成長できる環境であってほしい。",
  description:
    "子どもたちが自ら物事に興味を持ち、周囲の大人がその興味を一緒に育てていく。\n" +
    "そんな環境と社会が、当たり前になってほしい。\n\n" +
    
    "学問だけでなく、人の営みへの敬愛も、\n" +
    "子どもたちには学んでほしい。\n\n" +
    
    "そして「自由な大人」になること。\n" +
    "それは、自分の内なる欲求を自分で見つけ出し、\n" +
    "計画を立て、実行し、結果を内省できること。\n" +
    "自分の行いに責任を持つ覚悟を持てること。\n\n" +
    
    "そんな自由を、すべての子どもたちが手にできる社会であってほしい。",
};

const ABOUT_FEATURES: readonly AboutFeature[] = [
  {
    icon: Code,
    title: "幅広い開発経験",
    description:
      "フロントエンド（React/TypeScript）からバックエンド（Python/AWS）まで幅広い領域の開発を担当。",
    transitionDelayClass: "delay-0",
  },
  {
    icon: Lightbulb,
    title: "積極的なキャッチアップ",
    description: "開発トレンドには常にアンテナを張り、その動向を積極的に共有します。また自己研鑽に励む習慣もあります。",
    transitionDelayClass: "delay-100"
  },
  {
    icon: Target,
    title: "チーム作り",
    description:
      "「いい製品はいいチームから」を信条に、アジャイルマインドで一人ひとりのパフォーマンスを最大限に引き出せるチーム作りを大事にします。",
    transitionDelayClass: "delay-200",
  },
  {
    icon: Palette,
    title: "利益追求",
    description:
      "美しいコードだけではお金は稼げない。高度な技術だけでは会社は支えられない。持続可能な事業継続・ビジョン追求のために利益を生み出すプロダクト開発を目指します。",
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
    name: "Node.js",
    gradientClass: "from-green-500 to-green-300"
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

export const RELATED_LINKS: readonly SocialLink[] = [
  {
    icon: Github,
    href: "https://github.com/NakaiKt",
    label: "GitHub",
    hoverClass: "hover:bg-gray-900",
  },
  {
    icon: NoteIcon,
    href: "https://note.com/k_nakai_ks",
    label: "note",
    hoverClass: "hover:bg-emerald-600",
  },
  {
    icon: ZennIcon,
    href: "https://zenn.dev/kts_4",
    label: "Zenn",
    hoverClass: "hover:bg-blue-500",
  },
];

export const CONTACT_LINKS: readonly SocialLink[] = [
  {
    icon: BlueskyIcon,
    href: "https://bsky.app/profile/katsuhironakai.bsky.social",
    label: "Bluesky",
    hoverClass: "hover:bg-sky-500",
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
  RELATED_LINKS,
  CONTACT_LINKS,
};
