import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // Docker環境でのホットリロード設定（Turbopack用）
  experimental: {
    // Turbopackでのファイル監視を改善
    turbo: {
      // ルートディレクトリを明示的に指定
      root: process.cwd(),
    },
  },
};

export default nextConfig;
