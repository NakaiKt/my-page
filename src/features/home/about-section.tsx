import { USER_INFO } from "@/lib/constants/userInfo";

import SectionTitle from "@/components/SectionTitle";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { SectionVisibilityProps } from "./home-section.model";

export default function AboutSection({ isVisible }: SectionVisibilityProps) {
  return (
    <section id="about" data-animate="true">
      <SectionTitle title="About Me" />
      <div className="grid md:grid-cols-2 gap-6">
        {USER_INFO.ABOUT_FEATURES.map((feature) => {
          const Icon = feature.icon;

          return (
            <Card
              key={feature.title}
              className={`h-full transition-all duration-1000 ${feature.transitionDelayClass} ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-20"
              }`}
            >
              <CardHeader className="gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-lg">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </div>
              </CardHeader>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
