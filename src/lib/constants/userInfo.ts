import type { VisionContent, AboutFeature } from "../models/userInfo.model";
import { Code, Palette, Target, Zap } from "lucide-react";

const VISION: VisionContent = {
    headline: "「勉強が嫌い」という\n子供を０にする",
    description:
      "子供たちが学ぶことの楽しさを発見し、自ら学び続けられる環境を作ることを目指しています。\nテクノロジーとデザインの力で、教育体験をより良いものにしていきたいと考えています。",
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

export const USER_INFO = {
  VISION,
  ABOUT_FEATURES,
}