/**
 * デザインシステム - テーマ定義
 *
 * プロトタイプをベースにしたカラーテーマとデザイントークンの定義
 */

export const colors = {
  // プライマリカラー（メインテーマ）
  primary: {
    amber: {
      50: 'oklch(0.985 0.01 85)',
      100: 'oklch(0.97 0.02 85)',
      200: 'oklch(0.93 0.05 85)',
      300: 'oklch(0.87 0.08 85)',
      400: 'oklch(0.78 0.12 85)',
      500: 'oklch(0.68 0.15 85)',
      600: 'oklch(0.58 0.13 85)',
      700: 'oklch(0.48 0.11 85)',
      800: 'oklch(0.38 0.09 85)',
      900: 'oklch(0.28 0.07 85)',
    },
    orange: {
      50: 'oklch(0.98 0.02 65)',
      100: 'oklch(0.95 0.05 65)',
      200: 'oklch(0.90 0.10 65)',
      300: 'oklch(0.83 0.15 65)',
      400: 'oklch(0.75 0.18 65)',
      500: 'oklch(0.65 0.20 65)',
      600: 'oklch(0.55 0.18 65)',
      700: 'oklch(0.45 0.15 65)',
      800: 'oklch(0.35 0.12 65)',
      900: 'oklch(0.25 0.09 65)',
    },
  },

  // セカンダリカラー
  secondary: {
    blue: {
      500: 'oklch(0.55 0.22 250)',
      600: 'oklch(0.45 0.20 250)',
    },
    cyan: {
      400: 'oklch(0.75 0.12 195)',
      500: 'oklch(0.65 0.15 195)',
    },
    purple: {
      500: 'oklch(0.55 0.25 290)',
    },
    pink: {
      400: 'oklch(0.75 0.18 350)',
      500: 'oklch(0.65 0.22 350)',
    },
    green: {
      400: 'oklch(0.75 0.15 145)',
      500: 'oklch(0.65 0.18 145)',
    },
    emerald: {
      400: 'oklch(0.75 0.14 165)',
      500: 'oklch(0.65 0.16 165)',
    },
  },

  // グレースケール
  gray: {
    50: 'oklch(0.985 0.001 0)',
    100: 'oklch(0.97 0.001 0)',
    200: 'oklch(0.923 0.003 49)',
    300: 'oklch(0.85 0.005 49)',
    600: 'oklch(0.553 0.013 58)',
    700: 'oklch(0.45 0.01 56)',
    800: 'oklch(0.268 0.007 34)',
    900: 'oklch(0.216 0.006 56)',
  },
} as const;

/**
 * グラデーション定義
 * プロトタイプで頻繁に使用されるグラデーションパターン
 */
export const gradients = {
  primary: 'from-amber-500 to-orange-500',
  primaryLight: 'from-amber-400 to-orange-400',
  primaryDark: 'from-amber-600 to-orange-600',
  background: 'from-amber-50 via-white to-orange-50',

  // その他のグラデーション
  blue: 'from-blue-500 to-cyan-500',
  purple: 'from-purple-500 to-pink-500',
  green: 'from-green-500 to-emerald-500',
  dark: 'from-gray-900 to-gray-800',
} as const;

/**
 * スペーシング
 */
export const spacing = {
  section: 'py-20',
  container: 'container mx-auto px-4',
} as const;

/**
 * ボーダーラジウス
 */
export const borderRadius = {
  card: 'rounded-2xl',
  button: 'rounded-xl',
  badge: 'rounded-full',
  lg: 'rounded-lg',
} as const;

/**
 * シャドウ
 */
export const shadows = {
  card: 'shadow-lg hover:shadow-2xl',
  button: 'hover:shadow-2xl',
  xl: 'shadow-xl',
  '2xl': 'shadow-2xl',
} as const;

/**
 * トランジション
 */
export const transitions = {
  default: 'transition-all duration-300',
  slow: 'transition-all duration-1000',
  scale: 'hover:scale-105',
  scaleUp: 'hover:scale-110',
  translateY: 'hover:-translate-y-2',
} as const;

/**
 * テキストグラデーション
 */
export const textGradients = {
  primary: 'bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent',
  primaryDark: 'bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 bg-clip-text text-transparent',
} as const;

/**
 * アイコンサイズ
 */
export const iconSizes = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
  xl: 'w-8 h-8',
} as const;
