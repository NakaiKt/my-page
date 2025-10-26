/**
 * テーマとフォントの使用例コンポーネント
 *
 * このコンポーネントは、プロジェクトのデザインシステムの使用方法を
 * 実際のコードで示すためのサンプルです。
 */

import { gradients, textGradients, fontClasses } from '@/styles/theme';
import { Sparkles, Code, Palette } from 'lucide-react';

export default function ThemeExample() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <div className="container mx-auto px-4 py-12">
        {/* ヘッダーセクション */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-amber-500 to-orange-500 rounded-full"></div>
            <h1 className={`${fontClasses.headings.h1} ${textGradients.primaryDark}`}>
              テーマ使用例
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            デザインシステムの実装例
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full mt-4"></div>
        </section>

        {/* カードグリッド */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {/* カード1: カラーテーマ */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-300"></div>
            <div className="relative h-full bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="mb-6">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${gradients.primary} text-white shadow-lg`}>
                  <Palette className="w-6 h-6" />
                </div>
              </div>
              <h3 className={`${fontClasses.headings.h5} mb-4 text-gray-900`}>カラーテーマ</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Amber & Orangeのグラデーションを基調としたメインテーマ
              </p>
            </div>
          </div>

          {/* カード2: フォント */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-cyan-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-300"></div>
            <div className="relative h-full bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="mb-6">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg">
                  <Code className="w-6 h-6" />
                </div>
              </div>
              <h3 className={`${fontClasses.headings.h5} mb-4 text-gray-900`}>フォント</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Geist Sans & Geist Monoの最適化されたフォント
              </p>
            </div>
          </div>

          {/* カード3: コンポーネント */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-300"></div>
            <div className="relative h-full bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="mb-6">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg">
                  <Sparkles className="w-6 h-6" />
                </div>
              </div>
              <h3 className={`${fontClasses.headings.h5} mb-4 text-gray-900`}>コンポーネント</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                再利用可能なUIパターンとスタイル
              </p>
            </div>
          </div>
        </div>

        {/* ボタン例 */}
        <section className="text-center mb-16">
          <h2 className={`${fontClasses.headings.h3} mb-8 text-gray-900`}>
            ボタンスタイル
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {/* プライマリボタン */}
            <button className={`inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r ${gradients.primary} text-white ${fontClasses.weights.semibold} rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group`}>
              <span>プライマリボタン</span>
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </button>

            {/* セカンダリボタン */}
            <button className={`px-6 py-3 bg-white border-2 border-amber-500 text-amber-600 ${fontClasses.weights.semibold} rounded-xl hover:bg-amber-50 transition-all duration-300`}>
              セカンダリボタン
            </button>

            {/* アウトラインボタン */}
            <button className={`px-6 py-3 bg-transparent border border-gray-300 text-gray-700 ${fontClasses.weights.medium} rounded-xl hover:border-amber-500 hover:text-amber-600 transition-all duration-300`}>
              アウトライン
            </button>
          </div>
        </section>

        {/* タイポグラフィ例 */}
        <section className="max-w-3xl mx-auto">
          <h2 className={`${fontClasses.headings.h3} mb-8 text-center text-gray-900`}>
            タイポグラフィ
          </h2>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8 space-y-6">
            <div>
              <h1 className={fontClasses.headings.h1}>見出し H1</h1>
              <p className="text-sm text-gray-500 mt-2">text-5xl md:text-6xl font-bold</p>
            </div>
            <div>
              <h2 className={fontClasses.headings.h2}>見出し H2</h2>
              <p className="text-sm text-gray-500 mt-2">text-4xl font-bold</p>
            </div>
            <div>
              <h3 className={fontClasses.headings.h3}>見出し H3</h3>
              <p className="text-sm text-gray-500 mt-2">text-3xl font-bold</p>
            </div>
            <div>
              <p className={fontClasses.body.large}>大きい本文テキスト - text-xl</p>
              <p className="text-sm text-gray-500 mt-2">本文の強調表示に使用</p>
            </div>
            <div>
              <p className={fontClasses.body.base}>標準の本文テキスト - text-base</p>
              <p className="text-sm text-gray-500 mt-2">通常の本文に使用</p>
            </div>
            <div>
              <p className={fontClasses.body.small}>小さい本文テキスト - text-sm</p>
              <p className="text-sm text-gray-500 mt-2">補足情報に使用</p>
            </div>
            <div>
              <code className={`${fontClasses.mono} bg-gray-100 px-2 py-1 rounded text-sm`}>
                const code = "example";
              </code>
              <p className="text-sm text-gray-500 mt-2">コードスニペット - font-mono</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
