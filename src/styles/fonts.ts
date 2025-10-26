/**
 * デザインシステム - フォント定義
 *
 * プロジェクトで使用するフォントの設定と参照方法
 */

import { Geist, Geist_Mono } from "next/font/google";

/**
 * Geist Sans - メインフォント
 * 読みやすく、モダンなサンセリフフォント
 */
export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // フォント読み込み中もテキストを表示
});

/**
 * Geist Mono - 等幅フォント
 * コードブロックや技術的なテキストに使用
 */
export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

/**
 * フォントクラス定義
 */
export const fontClasses = {
  // メインフォント（サンセリフ）
  sans: "font-sans",
  // 等幅フォント
  mono: "font-mono",

  // フォントウェイト
  weights: {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  },

  // 見出しスタイル
  headings: {
    h1: "text-5xl md:text-6xl font-bold",
    h2: "text-4xl font-bold",
    h3: "text-3xl font-bold",
    h4: "text-2xl font-bold",
    h5: "text-xl font-bold",
    h6: "text-lg font-bold",
  },

  // 本文スタイル
  body: {
    large: "text-xl",
    base: "text-base",
    small: "text-sm",
    xs: "text-xs",
  },
} as const;

/**
 * フォント変数を取得
 *
 * 使用例:
 * ```tsx
 * import { getFontVariables } from '@/styles/fonts';
 *
 * <body className={getFontVariables()}>
 *   {children}
 * </body>
 * ```
 */
export function getFontVariables(): string {
  return `${geistSans.variable} ${geistMono.variable}`;
}

/**
 * フォントクラスを取得（antialiased含む）
 *
 * 使用例:
 * ```tsx
 * import { getFontClasses } from '@/styles/fonts';
 *
 * <body className={getFontClasses()}>
 *   {children}
 * </body>
 * ```
 */
export function getFontClasses(): string {
  return `${geistSans.variable} ${geistMono.variable} antialiased`;
}
