"use client";
import { Menu, Sparkles, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { HEADER_NAVIGATION } from "@/lib/constants/header";

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const isActive = (href: string) => pathname === href;

  useEffect(() => {
    // パスが変わったらメニューを閉じる（ブランドリンク等でも確実に閉じる）
    setMenuOpen(false);
  }, [pathname]);

  const renderNavItem = (href: string, label: string) =>
    isActive(href) ? (
      // アクティブな場合: リンク無効、太字、amber-500
      <span key={label} className="text-sm font-bold text-amber-500">
        {label}
      </span>
    ) : (
      // アクティブでない場合: 通常のリンク
      <Link
        key={label}
        href={href}
        className="text-sm font-medium text-gray-700 transition duration-200 hover:text-amber-500 hover:scale-105"
        onClick={() => setMenuOpen(false)}
      >
        {label}
      </Link>
    );

  return (
    <header className="backdrop-blur-sm bg-white/70 sticky top-0 z-40">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold text-amber-500 flex items-center gap-2"
          >
            <Sparkles className="w-5 h-5 text-amber-500" />
            Portfolio
          </Link>

          <div className="hidden md:flex gap-6">
            {HEADER_NAVIGATION.map((item) => renderNavItem(item.href, item.label))}
          </div>
        </div>
      </nav>

      <Popover open={menuOpen} onOpenChange={setMenuOpen}>
        <PopoverTrigger asChild>
          <Button
            aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={menuOpen}
            size="icon-lg"
            className="md:hidden fixed bottom-4 right-4 z-50 shadow-lg"
          >
            {menuOpen ? (
              <X className="h-5 w-5" aria-hidden />
            ) : (
              <Menu className="h-5 w-5" aria-hidden />
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          side="top"
          align="end"
          sideOffset={14}
          className="md:hidden w-56 space-y-3 bg-white/95 backdrop-blur-sm"
        >
          <nav className="flex flex-col gap-2">
            {HEADER_NAVIGATION.map((item) => renderNavItem(item.href, item.label))}
          </nav>
        </PopoverContent>
      </Popover>
    </header>
  );
}
