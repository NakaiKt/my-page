import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // Docker環境でのホットリロード設定（Turbopack用）
  // Turbopackを明示的に有効化し、環境変数でポーリングを設定
  turbopack: {},
};

export default nextConfig;
