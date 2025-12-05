import ArrowButton from "@/components/ArrowButton";
import { USER_META } from "@/lib/constants/userMeta";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="py-20 text-center relative">
      <div className="relative">
        <div
          className={cn(
            "w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden",
            "bg-gradient-to-br from-amber-400 to-orange-500 shadow-2xl ring-4 ring-amber-200",
            "flex items-center justify-center"
          )}
        >
          <Image
            src={USER_META.avater}
            alt={USER_META.name}
            width={160}
            height={160}
            className="rounded-full object-cover scale-110"
          />
        </div>
        <h1
          className={cn(
            "mb-3 bg-clip-text text-transparent",
            "bg-gradient-to-r from-amber-600 via-orange-400 to-amber-600"
          )}
        >
          {USER_META.name}
        </h1>
        <h5 className="text-gray-700 mb-4">{USER_META.job}</h5>
      </div>
      <ArrowButton href="/profile" text="プロフィール" />
    </section>
  );
}
