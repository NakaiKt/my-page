"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { HEADER_NAVIGATION } from "@/lib/constants/header";

export default function MobileNavigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) => pathname === href;

  return (
    <div className="fixed bottom-4 right-4 z-50 md:hidden">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-500 text-white shadow-lg transition-all duration-200 hover:bg-amber-600 hover:scale-110 active:scale-95"
            aria-label="メニューを開く"
          >
            {open ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </PopoverTrigger>
        <PopoverContent
          side="top"
          align="end"
          className="w-56 p-2"
          sideOffset={8}
        >
          <nav className="flex flex-col gap-1">
            {HEADER_NAVIGATION.map((item) =>
              isActive(item.href) ? (
                // アクティブな場合: リンク無効、太字、amber-500背景
                <span
                  key={item.label}
                  className="rounded-md bg-amber-50 px-4 py-3 text-sm font-bold text-amber-600"
                >
                  {item.label}
                </span>
              ) : (
                // アクティブでない場合: 通常のリンク
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-4 py-3 text-sm font-medium text-gray-700 transition-colors duration-200 hover:bg-amber-50 hover:text-amber-600"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>
        </PopoverContent>
      </Popover>
    </div>
  );
}
