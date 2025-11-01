"use client";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { usePathname } from "next/navigation";

import { HEADER_NAVIGATION } from "@/lib/constants/header";

export default function SiteHeader() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  return (
    <header className="backdrop-blur-sm bg-white/70 sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold text-amber-500 flex items-center gap-2"
          >
            <Sparkles className="w-5 h-5 text-amber-500" />
            Portfolio
          </Link>

          <div className="flex gap-6">
            {HEADER_NAVIGATION.map((item) =>
              isActive(item.href) ? (
                // アクティブな場合: リンク無効、太字、amber-500
                <span
                  key={item.label}
                  className="text-sm font-bold text-amber-500"
                >
                  {item.label}
                </span>
              ) : (
                // アクティブでない場合: 通常のリンク
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 transition duration-200 hover:text-amber-500 hover:scale-105"
                >
                  {item.label}
                </Link>
              ),
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
