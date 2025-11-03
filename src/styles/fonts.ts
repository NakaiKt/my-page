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
    h1: "heading-h1",
    h2: "heading-h2",
    h3: "heading-h3",
    h4: "heading-h4",
    h5: "heading-h5",
    h6: "heading-h6",
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
