import { Globe } from "lucide-react";
import type { Achievement } from "../models/achievements.model";

export const PERSONAL_ACHIEVEMENTS: readonly Achievement[] = [
  {
    id: 1,
    title: "個人ポートフォリオサイト",
    description:
      "Next.js 16.0とTailwind CSS v4を使用した個人ポートフォリオサイト。",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    icon: Globe,
    links: {
      github: "https://github.com/NakaiKt/my-page",
    },
    period: "2025年",
  },
  {
    id: 2,
    title: "履歴書作成ウェブアプリ",
    description:
      "デザインの監督だけ行い、実装は完全に生成AIに任せた履歴書作成ウェブアプリ。「Claudeが半日でやってくれました」",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
      "claude code",
      "gpt-5.1 codex",
    ],
    icon: Globe,
    links: {
      github: "https://github.com/NakaiKt/rirekisho",
      page: "https://rirekisho-nakaikt.vercel.app/",
    },
    period: "2025年",
  },
];

export const OTHER_CONTRIBUTIONS: readonly Achievement[] = [
  // OSS貢献、技術記事、登壇など
  // 必要に応じて追加してください
];
