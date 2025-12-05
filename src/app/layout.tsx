import SiteFooter from "@/components/layout/site-footer";
import SiteHeader from "@/components/layout/site-header";
import MobileNavigation from "@/components/layout/mobile-navigation";
import { cn } from "@/lib/utils";
import { getFontClasses } from "@/styles/fonts";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "個人ポートフォリオサイト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={cn(getFontClasses(), "min-h-screen")}>
        <div
          className={cn(
            "bg-gradient-to-r from-amber-50 via-white to-orange-50",
          )}
        >
          <SiteHeader />
          <main className="container mx-auto px-4 py-12">{children}</main>
        </div>
        <SiteFooter />
        {/* モバイルナビゲーション: 768px未満で右下に固定表示 */}
        <MobileNavigation />
      </body>
    </html>
  );
}
