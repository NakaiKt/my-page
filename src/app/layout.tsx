import type { Metadata } from "next";
import { getFontClasses } from "@/styles/fonts";
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
      <body className={getFontClasses()}>
        {children}
      </body>
    </html>
  );
}
