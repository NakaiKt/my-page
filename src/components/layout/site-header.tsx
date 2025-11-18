"use client";
import { Sparkles, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { HEADER_NAVIGATION } from "@/lib/constants/header";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function SiteHeader() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* Desktop Header */}
      <header className="backdrop-blur-sm bg-white/70 sticky top-0 z-50 hidden md:block">
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
                  <span
                    key={item.label}
                    className="text-sm font-bold text-amber-500"
                  >
                    {item.label}
                  </span>
                ) : (
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

      {/* Mobile Header - Logo only */}
      <header className="backdrop-blur-sm bg-white/70 sticky top-0 z-50 md:hidden">
        <nav className="container mx-auto px-4 py-4">
          <Link
            href="/"
            className="text-xl font-bold text-amber-500 flex items-center gap-2"
          >
            <Sparkles className="w-5 h-5 text-amber-500" />
            Portfolio
          </Link>
        </nav>
      </header>

      {/* Mobile Hamburger Menu - Fixed bottom right */}
      <div className="md:hidden">
        <Popover>
          <PopoverTrigger asChild>
            <button
              className="fixed bottom-6 right-6 z-[9999] w-14 h-14 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 shadow-lg flex items-center justify-center hover:shadow-xl transition-all"
              aria-label="メニュー"
            >
              <Menu className="w-6 h-6 text-white" />
            </button>
          </PopoverTrigger>
          <PopoverContent
            side="top"
            align="end"
            className="w-64 p-0 mr-6 mb-2 z-[9999]"
          >
            <div className="p-4 border-b border-gray-100">
              <h3 className="font-bold text-gray-900">メニュー</h3>
            </div>
            <nav className="p-3">
              {HEADER_NAVIGATION.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`block text-base font-medium transition-colors py-3 px-4 rounded-lg ${
                    isActive(item.href)
                      ? "bg-amber-50 text-amber-600 font-bold"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
}
