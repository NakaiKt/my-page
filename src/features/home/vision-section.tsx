import { cn, getSlideUpAnimation } from "@/lib/utils";

import type { VisionContent } from "@/lib/models/userInfo.model";

type Props = {
  readonly vision: VisionContent;
  readonly isVisible: boolean;
};

export default function VisionSection({ vision, isVisible }: Props) {
  return (
    <section id="vision" data-animate="true">
      <div className={`relative ${getSlideUpAnimation(isVisible)}`}>
        <div
          className={cn(
            "relative rounded-3xl p-12",
            "border border-gray-700 shadow-2xl overflow-hidden",
            "bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-sm",
          )}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-full blur-3xl" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-12 bg-gradient-to-b from-amber-500 to-orange-500 rounded-full" />
              <h2 className="text-white">願い</h2>
            </div>
            <p className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight whitespace-pre-line">
              {vision.headline}
            </p>
            <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-line">
              {vision.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
