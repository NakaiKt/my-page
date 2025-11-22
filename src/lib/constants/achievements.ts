import { Globe, Code, BookOpen, Lightbulb } from "lucide-react";
import type { Achievement } from "../models/achievements.model";

export const PERSONAL_ACHIEVEMENTS: readonly Achievement[] = [
  {
    id: 1,
    title: "個人ポートフォリオサイト",
    description:
      "Next.js 16.0とTailwind CSS v4を使用した個人ポートフォリオサイト。モダンなデザインシステムとアニメーション効果を実装。",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    icon: Globe,
    links: {
      github: "https://github.com/NakaiKt/my-page",
    },
    period: "2025年",
  },
  // 以下、必要に応じて個人プロジェクトを追加してください
];

export const OTHER_CONTRIBUTIONS: readonly Achievement[] = [
  // OSS貢献、技術記事、登壇など
  // 必要に応じて追加してください
];
