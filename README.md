# Portfolio Project

個人ポートフォリオサイトのプロジェクトです。

## 🚀 開発環境起動

### Docker使用

```bash
docker build -t mypage-frontend .
docker run -it -p 3000:3000 -v ${PWD}:/app --name mypage-frontend --rm mypage-frontend
```

### 環境に入ったあと

```bash
npm i
npm run dev
```

### ローカル開発

```bash
npm install
npm run dev
```

開発サーバーが起動したら、ブラウザで [http://localhost:3000](http://localhost:3000) にアクセスしてください。

## 🎨 デザインシステム

このプロジェクトでは、統一されたデザインシステムを使用しています。

### テーマとフォントの参照方法

詳細な使用方法は **[THEME_GUIDE.md](./THEME_GUIDE.md)** を参照してください。

#### クイックスタート

```tsx
// テーマカラーの使用
import { gradients, textGradients } from '@/styles/theme';

<div className={`bg-gradient-to-r ${gradients.primary}`}>
  メインカラーのグラデーション
</div>

// フォントの使用
import { fontClasses } from '@/styles/fonts';

<h1 className={fontClasses.headings.h1}>
  見出しテキスト
</h1>
```

#### 主なファイル

- `src/styles/theme.ts` - カラーテーマ・デザイントークン定義
- `src/styles/fonts.ts` - フォント設定
- `src/app/globals.css` - グローバルスタイル・CSS変数
- `src/components/ThemeExample.tsx` - 使用例コンポーネント

#### カラーテーマ

- **メインカラー**: Amber & Orange のグラデーション
- **セカンダリカラー**: Blue-Cyan, Purple-Pink, Green-Emerald
- **フォント**: Geist Sans & Geist Mono

## 📁 プロジェクト構造

```
my-page/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── layout.tsx    # ルートレイアウト
│   │   ├── page.tsx      # ホームページ
│   │   └── globals.css   # グローバルスタイル
│   ├── components/       # Reactコンポーネント
│   │   └── ThemeExample.tsx
│   ├── styles/           # スタイル定義
│   │   ├── theme.ts      # テーマ定義
│   │   └── fonts.ts      # フォント設定
│   └── lib/              # ユーティリティ
├── prototype/            # プロトタイプファイル
│   ├── home-prototype.jsx
│   ├── experience-prototype.jsx
│   └── skills-prototype.jsx
├── THEME_GUIDE.md        # デザインシステムガイド
└── README.md             # このファイル
```

## 🛠️ 技術スタック

- **Framework**: Next.js 16.0.0 (App Router)
- **React**: 19.2.0
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono (Google Fonts)

## 📝 スクリプト

```bash
# 開発サーバー起動
npm run dev

# 本番ビルド
npm run build

# 本番サーバー起動
npm run start

# リント
npm run lint
```

## 📚 参考リンク

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [デザインシステムガイド](./THEME_GUIDE.md)

