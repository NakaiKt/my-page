import { BookOpen, FileText, Github, Linkedin } from "lucide-react";

import type {
  FavoriteHighlight,
  HomeSectionId,
  SkillBadge,
  SocialLink,
} from "../models/home.model";


export const HOME_SECTION_IDS: readonly HomeSectionId[] = [
  "vision",
  "about",
  "favorites",
  "skills",
  "social",
] 

export const HOME_FAVORITES: readonly FavoriteHighlight[] = [
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
] as const;

export const HOME_SKILL_BADGES: readonly SkillBadge[] = [
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
] as const;

export const HOME_SOCIAL_LINKS: readonly SocialLink[] = [
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
] as const;
