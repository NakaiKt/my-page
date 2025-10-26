import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // Docker環境でのホットリロード設定
  webpack: (config, { isServer }) => {
    // ファイル監視の設定（Docker環境で必要）
    config.watchOptions = {
      poll: 1000, // 1秒ごとにポーリング
      aggregateTimeout: 300, // 変更を検知してから300ms待つ
    };

    return config;
  },
};

export default nextConfig;
