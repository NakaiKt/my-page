import type { Metadata } from "next";
import { getFontClasses } from "@/styles/fonts";
import SiteFooter from "@/components/layout/site-footer";
import SiteHeader from "@/components/layout/site-header";
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
      <body className={`${getFontClasses()} flex min-h-screen flex-col`}>
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
