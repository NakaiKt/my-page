# デザインシステム - テーマ参照ガイド

このプロジェクトでは、プロトタイプをベースにした統一されたデザインシステムを使用しています。

## 📁 ファイル構成

```
src/
├── styles/
│   ├── theme.ts      # カラー・デザイントークン定義
│   └── fonts.ts      # フォント設定
└── app/
    └── globals.css   # グローバルスタイル・CSS変数
```

---

## 🎨 カラーテーマの参照方法

### 1. TypeScriptから参照（推奨）

型安全にテーマを参照できます。

```tsx
import { colors, gradients, textGradients } from '@/styles/theme';

// カラーを直接使用
<div className="bg-amber-500 text-white">
  Hello
</div>

// グラデーション定義を使用
<div className={`bg-gradient-to-r ${gradients.primary}`}>
  Primary Gradient
</div>

// テキストグラデーション
<h1 className={textGradients.primary}>
  見出しテキスト
</h1>
```

### 2. Tailwind CSSクラス（直接記述）

プロトタイプと同じクラス名をそのまま使用できます。

```tsx
// メインカラー
<div className="bg-amber-500">Amber</div>
<div className="text-orange-600">Orange Text</div>

// グラデーション
<div className="bg-gradient-to-r from-amber-500 to-orange-500">
  Primary Gradient
</div>

// 背景グラデーション
<div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
  Background
</div>
```

### 3. CSS変数として参照

CSS内で直接参照する場合。

```css
.custom-element {
  background-color: var(--theme-amber-500);
  color: var(--theme-orange-600);
}
```

---

## ✏️ フォントの参照方法

### 1. TypeScriptから参照（推奨）

```tsx
import { getFontClasses, fontClasses } from '@/styles/fonts';

// レイアウトでフォントを適用
export default function Layout({ children }) {
  return (
    <body className={getFontClasses()}>
      {children}
    </body>
  );
}

// 見出しスタイル
<h1 className={fontClasses.headings.h1}>
  大見出し
</h1>

// フォントウェイト
<p className={fontClasses.weights.bold}>
  太字テキスト
</p>

// 等幅フォント
<code className={fontClasses.mono}>
  const code = 'example';
</code>
```

### 2. Tailwind CSSクラス（直接記述）

```tsx
// Sans Serif（デフォルト）
<p className="font-sans">本文テキスト</p>

// 等幅フォント
<code className="font-mono">コード</code>

// フォントウェイト
<h2 className="font-bold">太字見出し</h2>
<p className="font-medium">中太本文</p>

// 見出しサイズ
<h1 className="text-5xl md:text-6xl font-bold">
  レスポンシブ見出し
</h1>
```

---

## 🎨 よく使うデザインパターン

### カード

```tsx
import { borderRadius, shadows, transitions } from '@/styles/theme';

<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
  カードコンテンツ
</div>
```

### ボタン

```tsx
// プライマリボタン
<button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
  ボタン
</button>

// セカンダリボタン
<button className="px-6 py-3 bg-white border-2 border-amber-500 text-amber-600 font-semibold rounded-xl hover:bg-amber-50 transition-all duration-300">
  セカンダリ
</button>
```

### アイコン付きグラデーション見出し

```tsx
import { Sparkles } from 'lucide-react';

<div className="flex items-center gap-2">
  <Sparkles className="w-5 h-5 text-amber-500" />
  <h1 className="text-xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
    見出し
  </h1>
</div>
```

### セクション区切り線

```tsx
<div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full"></div>
```

### ホバーエフェクト付きカード

```tsx
<div className="group relative">
  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-300"></div>
  <div className="relative bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
    カード内容
  </div>
</div>
```

---

## 🎨 カラーパレット

### メインテーマカラー

| カラー | クラス | 用途 |
|--------|--------|------|
| ![#f59e0b](https://via.placeholder.com/15/f59e0b/000000?text=+) Amber 50 | `bg-amber-50` | 背景（淡い） |
| ![#f59e0b](https://via.placeholder.com/15/f59e0b/000000?text=+) Amber 400 | `bg-amber-400` | アクセント |
| ![#f59e0b](https://via.placeholder.com/15/f59e0b/000000?text=+) Amber 500 | `bg-amber-500` | メインカラー |
| ![#f59e0b](https://via.placeholder.com/15/f59e0b/000000?text=+) Amber 600 | `bg-amber-600` | メインカラー（濃い） |
| ![#f97316](https://via.placeholder.com/15/f97316/000000?text=+) Orange 400 | `bg-orange-400` | アクセント |
| ![#f97316](https://via.placeholder.com/15/f97316/000000?text=+) Orange 500 | `bg-orange-500` | メインカラー |
| ![#f97316](https://via.placeholder.com/15/f97316/000000?text=+) Orange 600 | `bg-orange-600` | メインカラー（濃い） |

### セカンダリカラー

| カラー | クラス | 用途 |
|--------|--------|------|
| Blue-Cyan | `from-blue-500 to-cyan-500` | 技術・開発系 |
| Purple-Pink | `from-purple-500 to-pink-500` | デザイン系 |
| Green-Emerald | `from-green-500 to-emerald-500` | 成長・チーム |

---

## 📐 スペーシング

```tsx
import { spacing } from '@/styles/theme';

// セクションの余白
<section className="py-20">
  {/* コンテンツ */}
</section>

// コンテナ
<div className="container mx-auto px-4">
  {/* コンテンツ */}
</div>
```

---

## 🔄 トランジション

```tsx
import { transitions } from '@/styles/theme';

// デフォルト（300ms）
<button className="transition-all duration-300 hover:scale-105">
  ボタン
</button>

// スロー（1000ms）
<div className="transition-all duration-1000 opacity-0 hover:opacity-100">
  フェードイン
</div>
```

---

## 📱 レスポンシブデザイン

Tailwind CSSのブレークポイントを使用：

```tsx
// モバイルファースト
<h1 className="text-3xl md:text-5xl lg:text-6xl">
  レスポンシブ見出し
</h1>

// グリッドレイアウト
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {/* カード */}
</div>
```

---

## 🎯 使用例：完全なコンポーネント

```tsx
import { gradients, fontClasses } from '@/styles/theme';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="py-20 text-center">
      <div className="container mx-auto px-4">
        {/* アイコン */}
        <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-6xl shadow-2xl transform hover:scale-110 transition-transform duration-300 ring-4 ring-amber-200">
          👤
        </div>

        {/* 見出し */}
        <h1 className={`${fontClasses.headings.h1} mb-3 bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 bg-clip-text text-transparent`}>
          山田 太郎
        </h1>

        {/* サブタイトル */}
        <p className="text-xl md:text-2xl text-gray-700 mb-4 font-medium">
          エンジニア・UXデザイナー
        </p>

        {/* バッジ */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full border border-amber-200 text-gray-600">
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span className="text-sm">@ 株式会社サンプル</span>
        </div>
      </div>
    </section>
  );
}
```

---

## 🚀 ベストプラクティス

1. **型安全性を優先**
   - 可能な限り `theme.ts` と `fonts.ts` から import して使用

2. **一貫性を保つ**
   - プロトタイプと同じクラス名・パターンを使用

3. **再利用可能なコンポーネント化**
   - 共通パターンはコンポーネントとして抽出

4. **アクセシビリティを考慮**
   - 十分なコントラスト比を確保
   - キーボード操作をサポート

5. **パフォーマンス最適化**
   - 不要なアニメーションは避ける
   - `will-change` の過度な使用は避ける

---

## 📚 参考リンク

- [Tailwind CSS v4 ドキュメント](https://tailwindcss.com/docs)
- [Next.js フォント最適化](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
- [OKLCH カラースペース](https://oklch.com/)

---

## 🛠️ 開発のヒント

### VSCode 拡張機能

- **Tailwind CSS IntelliSense**: クラス名の自動補完
- **Prettier - Code formatter**: コードフォーマット

### 設定

`tailwind.config.js` の設定はTailwind CSS v4の新しいCSS変数ベースの仕組みを使用しています。カスタムカラーは `globals.css` の `:root` で定義されています。

---

最終更新: 2025-10-26
