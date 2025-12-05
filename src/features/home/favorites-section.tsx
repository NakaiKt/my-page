import { USER_INFO } from "@/lib/constants/userInfo";

import SectionTitle from "@/components/SectionTitle";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { SectionVisibilityProps } from "./home-section.model";

export default function FavoritesSection({
  isVisible,
}: SectionVisibilityProps) {
  return (
    <section id="favorites" data-animate="true">
      <SectionTitle
        title="趣味・好きなもの"
        description="日常の中で楽しんでいること"
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {USER_INFO.FAVORITES.map((item) => {
          const Icon = item.icon;
          return (
            <Card
              key={item.title}
              className={`h-full transition-all duration-1000 ${item.transitionDelayClass} ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
            >
              <CardHeader className="gap-4">
                <div className="text-5xl" aria-hidden>
                  <Icon className="size-12" />
                </div>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
