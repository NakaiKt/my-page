import React, { useState, useEffect } from 'react';
import { Github, Linkedin, FileText, BookOpen, Sparkles, ChevronDown, Calendar, Briefcase, Code, Users, TrendingUp } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: "教育プラットフォーム刷新プロジェクト",
    period: "2024年4月 〜 現在",
    roles: ["UXデザイナー", "フロントエンドエンジニア"],
    summary: "既存の教育プラットフォームのUI/UX全面刷新。ユーザー調査から設計、実装まで一貫して担当。",
    image: "🎓",
    tags: ["React", "TypeScript", "Figma", "UXリサーチ"],
    details: {
      background: "既存のプラットフォームは複雑な操作フローとわかりにくいUIにより、ユーザー離脱率が高い状態でした。特に初めて利用するユーザーにとって、何をすればいいのかわからないという声が多く寄せられていました。",
      solution: "ユーザーインタビューとユーザビリティテストを実施し、問題点を洗い出しました。情報設計を見直し、3ステップで完了するシンプルな導線を設計。Figmaでプロトタイプを作成し、関係者からフィードバックを得ながら改善を重ねました。実装ではReact + TypeScriptを使用し、アクセシビリティにも配慮したコンポーネント設計を行いました。",
      results: "ユーザー離脱率を40%削減、新規ユーザーの定着率が25%向上しました。カスタマーサポートへの問い合わせ数も30%減少し、ユーザー満足度が大幅に改善されました。",
      collaboration: "プロダクトマネージャー、バックエンドエンジニア、カスタマーサクセスチームと密に連携。週次で進捗共有会を開催し、各チームの視点を取り入れながらプロジェクトを進めました。"
    }
  },
  {
    id: 2,
    title: "モバイルアプリ新機能開発",
    period: "2023年10月 〜 2024年3月",
    roles: ["フロントエンドエンジニア"],
    summary: "学習進捗を可視化する新機能の開発。データビジュアライゼーションとアニメーションを駆使した直感的なUI。",
    image: "📱",
    tags: ["React Native", "TypeScript", "D3.js", "Redux"],
    details: {
      background: "ユーザーから「自分の学習進捗がわかりにくい」というフィードバックが多数寄せられていました。モチベーション維持のため、達成感を感じられる機能が必要とされていました。",
      solution: "学習データをグラフやチャートで視覚化する機能を開発。D3.jsを使用してインタラクティブなグラフを実装し、達成時にはマイクロアニメーションで祝福する演出を追加しました。React Nativeの特性を活かし、ネイティブのような滑らかな動作を実現しました。",
      results: "機能リリース後、ユーザーの継続利用率が20%向上。特に週3回以上利用するアクティブユーザーが35%増加しました。",
      collaboration: "デザイナーと密に連携し、アニメーションの動きやタイミングを何度も調整。データアナリストからの分析結果も反映し、ユーザーにとって本当に価値のある指標を表示するよう工夫しました。"
    }
  },
  {
    id: 3,
    title: "デザインシステム構築",
    period: "2023年4月 〜 2023年9月",
    roles: ["UXデザイナー", "フロントエンドエンジニア"],
    summary: "プロダクト全体で使用するデザインシステムの構築。一貫性のあるUI/UXを実現し、開発効率を向上。",
    image: "🎨",
    tags: ["Figma", "React", "Storybook", "TypeScript"],
    details: {
      background: "複数のプロダクトで異なるデザインパターンが使用され、ブランドの一貫性が損なわれていました。また、デザイナーとエンジニア間のコミュニケーションコストも高い状態でした。",
      solution: "Figmaでコンポーネントライブラリを作成し、React + TypeScriptで実装。Storybookでドキュメント化し、誰でも使えるようにしました。アクセシビリティガイドラインも策定し、WCAG 2.1 AA準拠を目指しました。",
      results: "新機能の開発時間が平均30%短縮。デザイナーとエンジニア間の認識齟齬が大幅に減少し、スムーズな開発フローが実現できました。",
      collaboration: "全社横断でデザイナー、エンジニア、プロダクトマネージャーを巻き込んだワークショップを開催。各チームのニーズをヒアリングし、実際に使われるデザインシステムを目指しました。"
    }
  },
  {
    id: 4,
    title: "管理画面リニューアル",
    period: "2022年10月 〜 2023年3月",
    roles: ["フロントエンドエンジニア"],
    summary: "社内向け管理画面の全面リニューアル。レガシーコードのモダン化と、使いやすさの大幅改善。",
    image: "⚙️",
    tags: ["Vue.js", "TypeScript", "Tailwind CSS"],
    details: {
      background: "古い技術スタックで構築された管理画面は、メンテナンスが困難で新機能追加にも時間がかかる状態でした。社内スタッフからも「使いにくい」という声が多数寄せられていました。",
      solution: "Vue.jsとTypeScriptを使用して全面的にリニューアル。よく使う機能をダッシュボードに集約し、操作回数を削減しました。Tailwind CSSでスタイリングを統一し、レスポンシブ対応も実現しました。",
      results: "作業効率が平均40%向上。特に日次で行う業務の所要時間が大幅に削減され、社内スタッフから高評価を得ました。",
      collaboration: "実際に管理画面を使用する社内スタッフにヒアリングを重ね、本当に必要な機能を見極めました。リリース後も継続的にフィードバックを収集し、改善を続けています。"
    }
  }
];

export default function ExperiencePrototype() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [visibleCards, setVisibleCards] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set([...prev, entry.target.getAttribute('data-id')]));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate-card]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const toggleAccordion = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      {/* Decorative elements */}
      <div className="fixed top-20 right-10 w-32 h-32 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="fixed top-40 left-10 w-32 h-32 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="fixed bottom-20 right-1/4 w-32 h-32 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      
      {/* Header Navigation */}
      <header className="backdrop-blur-sm bg-white/70 border-b border-amber-100 sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="text-xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" />
              Portfolio
            </a>
            <div className="flex gap-6">
              <a href="/" className="text-sm font-medium text-gray-700 hover:text-amber-500 transition-all hover:scale-105">
                Home
              </a>
              <a href="/experience" className="text-sm font-medium text-amber-500 border-b-2 border-amber-500">
                Experience
              </a>
              <a href="/skills" className="text-sm font-medium text-gray-700 hover:text-amber-500 transition-all hover:scale-105">
                Skills
              </a>
            </div>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12 relative">
        {/* Page Header */}
        <section className="py-16 text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-amber-500 to-orange-500 rounded-full"></div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 bg-clip-text text-transparent">
              Experience
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            これまでに携わってきたプロジェクトと、そこで得た経験をご紹介します
          </p>
        </section>

        {/* Timeline */}
        <section className="py-8 max-w-5xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-400 via-orange-400 to-amber-400 transform md:-translate-x-1/2"></div>

            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                data-id={exp.id}
                data-animate-card
                className={`mb-12 transition-all duration-1000 ${
                  visibleCards.has(String(exp.id))
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-20'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`relative md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto md:pl-12' : 'md:pr-12'}`}>
                  {/* Timeline dot */}
                  <div className={`absolute top-8 ${index % 2 === 0 ? 'md:-left-2' : 'md:-right-2'} left-0 md:left-auto w-4 h-4 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full border-4 border-white shadow-lg z-10`}></div>

                  {/* Card */}
                  <div className="group relative ml-8 md:ml-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-300"></div>
                    <div className="relative bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                      {/* Card Header */}
                      <button
                        onClick={() => toggleAccordion(exp.id)}
                        className="w-full p-6 text-left transition-colors hover:bg-gray-50"
                      >
                        <div className="flex items-start gap-4">
                          <div className="text-5xl flex-shrink-0">{exp.image}</div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-2">
                              <Calendar className="w-4 h-4 text-amber-500 flex-shrink-0" />
                              <span className="text-sm text-gray-600">{exp.period}</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                            <div className="flex flex-wrap gap-2 mb-3">
                              {exp.roles.map((role, idx) => (
                                <span
                                  key={idx}
                                  className="inline-flex items-center gap-1 px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-medium"
                                >
                                  <Briefcase className="w-3 h-3" />
                                  {role}
                                </span>
                              ))}
                            </div>
                            <p className="text-sm text-gray-600 mb-4">{exp.summary}</p>
                            <div className="flex flex-wrap gap-2">
                              {exp.tags.map((tag, idx) => (
                                <span
                                  key={idx}
                                  className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          <ChevronDown
                            className={`w-6 h-6 text-amber-500 flex-shrink-0 transition-transform duration-300 ${
                              expandedId === exp.id ? 'rotate-180' : ''
                            }`}
                          />
                        </div>
                      </button>

                      {/* Accordion Content */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          expandedId === exp.id ? 'max-h-[2000px]' : 'max-h-0'
                        }`}
                      >
                        <div className="p-6 pt-0 space-y-6 border-t border-gray-100">
                          {/* Background */}
                          <div>
                            <div className="flex items-center gap-2 mb-3">
                              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                                <TrendingUp className="w-4 h-4 text-white" />
                              </div>
                              <h4 className="text-lg font-bold text-gray-900">背景・課題</h4>
                            </div>
                            <p className="text-gray-700 leading-relaxed pl-10">{exp.details.background}</p>
                          </div>

                          {/* Solution */}
                          <div>
                            <div className="flex items-center gap-2 mb-3">
                              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                                <Code className="w-4 h-4 text-white" />
                              </div>
                              <h4 className="text-lg font-bold text-gray-900">解決策・アプローチ</h4>
                            </div>
                            <p className="text-gray-700 leading-relaxed pl-10">{exp.details.solution}</p>
                          </div>

                          {/* Results */}
                          <div>
                            <div className="flex items-center gap-2 mb-3">
                              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                                <TrendingUp className="w-4 h-4 text-white" />
                              </div>
                              <h4 className="text-lg font-bold text-gray-900">成果</h4>
                            </div>
                            <p className="text-gray-700 leading-relaxed pl-10">{exp.details.results}</p>
                          </div>

                          {/* Collaboration */}
                          <div>
                            <div className="flex items-center gap-2 mb-3">
                              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                                <Users className="w-4 h-4 text-white" />
                              </div>
                              <h4 className="text-lg font-bold text-gray-900">協働のエピソード</h4>
                            </div>
                            <p className="text-gray-700 leading-relaxed pl-10">{exp.details.collaboration}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative border-t border-gray-200 mt-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-400/5 to-orange-400/5"></div>
        <div className="relative container mx-auto px-4 py-12">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-gradient-to-b from-amber-500 to-orange-500 rounded-full"></div>
              <h3 className="text-2xl font-bold text-gray-900">
                Contact
              </h3>
            </div>
            <p className="text-gray-700 mb-6 text-lg">
              お仕事のご相談はこちらからお気軽にどうぞ
            </p>
            <a
              href="mailto:contact@example.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              <span>contact@example.com</span>
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </a>
          </div>
          <div className="text-center mt-10 text-sm text-gray-500">
            <p>© 2025 Portfolio. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -20px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(20px, 10px) scale(1.05); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
