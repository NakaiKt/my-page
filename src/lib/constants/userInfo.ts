import type { VisionContent, AboutFeature, FavoriteHighlight, SkillBadge, SocialLink } from "../models/userInfo.model";
import { Code, Palette, Target, Zap, Github, Linkedin, FileText, BookOpen } from "lucide-react";

const VISION: VisionContent = {
    headline: "子どもたちが本質を理解する学びを通して\n自分の生きる理由を見つけられる社会をつくる",
    description:
      "人が豊かに生きるには、自分の生きる理由を自認できていることが重要だ。\nそれは、自分がポジティブな感情を持って取り組めること（何が楽しいか、何を残せるか、何で貢献できるか）を、自分で見つけ、選択できる力を持つことで実現する。\nその力を育むのが、本質を理解する学びだ。",
  }

const ABOUT_FEATURES: readonly AboutFeature[] = [
    {
      icon: Code,
      title: "エンジニアリング",
      description:
        "技術的な実装とユーザー体験の両方を考慮した開発を行います。なぜその機能が必要なのか、常に問い続けています。",
      transitionDelayClass: "delay-0",
    },
    {
      icon: Palette,
      title: "UXデザイン",
      description:
        "過度な装飾を避け、シンプルで使いやすいデザインを心がけています。必要最小限で迷わせない設計を実践します。",
      transitionDelayClass: "delay-100",
    },
    {
      icon: Target,
      title: "チームワーク",
      description:
        "エンジニア、デザイナー、プロダクトマネージャーと協働し、より良いプロダクトを作ることにやりがいを感じています。",
      transitionDelayClass: "delay-200",
    },
    {
      icon: Zap,
      title: "価値創出",
      description:
        "常にユーザーファーストの姿勢を忘れず、価値あるプロダクトを届けることに情熱を注いでいます。",
      transitionDelayClass: "delay-300",
    },
  ]
  
const FAVORITES: readonly FavoriteHighlight[] = [
    {
      emoji: "☕",
      title: "コーヒー",
      description: "朝のコーヒーから1日が始まります",
      gradientClass: "from-amber-400 to-orange-400",
      transitionDelayClass: "delay-0",
    },
    {
      emoji: "📚",
      title: "読書",
      description: "様々なジャンルの本から学びを得ています",
      gradientClass: "from-blue-400 to-cyan-400",
      transitionDelayClass: "delay-75",
    },
    {
      emoji: "🎨",
      title: "デザイン",
      description: "美しく機能的なデザインが好きです",
      gradientClass: "from-pink-400 to-rose-400",
      transitionDelayClass: "delay-150",
    },
    {
      emoji: "🤝",
      title: "チームワーク",
      description: "一緒に働く仲間を大切にしています",
      gradientClass: "from-green-400 to-emerald-400",
      transitionDelayClass: "delay-0",
    },
    {
      emoji: "🌱",
      title: "成長",
      description: "日々新しいことを学び続けたいです",
      gradientClass: "from-lime-400 to-green-400",
      transitionDelayClass: "delay-75",
    },
    {
      emoji: "🎯",
      title: "ユーザー視点",
      description: "常にユーザーのことを考えています",
      gradientClass: "from-purple-400 to-indigo-400",
      transitionDelayClass: "delay-150",
    },
  ] 


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
      name: "Figma",
      gradientClass: "from-purple-500 to-pink-500",
    },
    {
      name: "UXデザイン",
      gradientClass: "from-amber-500 to-orange-500",
    },
    {
      name: "アジャイル開発",
      gradientClass: "from-green-500 to-emerald-500",
    },
    {
      name: "UI/UXリサーチ",
      gradientClass: "from-rose-500 to-pink-500",
    },
  ]
  
  export const SOCIAL_LINKS: readonly SocialLink[] = [
    {
      icon: Github,
      href: "https://github.com",
      label: "GitHub",
      hoverClass: "hover:bg-gray-900",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com",
      label: "LinkedIn",
      hoverClass: "hover:bg-blue-600",
    },
    {
      icon: FileText,
      href: "https://wantedly.com",
      label: "Wantedly",
      hoverClass: "hover:bg-green-600",
    },
    {
      icon: BookOpen,
      href: "https://note.com",
      label: "Note",
      hoverClass: "hover:bg-emerald-600",
    },
  ]

export const USER_INFO = {
  VISION,
  ABOUT_FEATURES,
  FAVORITES,
  SKILL_BADGES,
  SOCIAL_LINKS,
}