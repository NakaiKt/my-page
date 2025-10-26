import React, { useEffect, useState } from 'react';
import { Sparkles, Code, Palette, Wrench, Award, Target, Zap, TrendingUp, Users, Layers } from 'lucide-react';

const skillCategories = [
  {
    id: 1,
    category: "言語・フレームワーク",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React", years: 3, level: "advanced" },
      { name: "TypeScript", years: 3, level: "advanced" },
      { name: "Next.js", years: 2, level: "advanced" },
      { name: "JavaScript", years: 4, level: "advanced" },
      { name: "Vue.js", years: 2, level: "intermediate" },
      { name: "Python", years: 2, level: "intermediate" },
      { name: "HTML/CSS", years: 4, level: "advanced" },
      { name: "Tailwind CSS", years: 2, level: "advanced" },
    ]
  },
  {
    id: 2,
    category: "デザイン・UX",
    icon: Palette,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Figma", years: 3, level: "advanced" },
      { name: "Adobe XD", years: 2, level: "intermediate" },
      { name: "UXリサーチ", years: 2, level: "intermediate" },
      { name: "ユーザビリティテスト", years: 2, level: "intermediate" },
      { name: "情報設計", years: 3, level: "advanced" },
      { name: "プロトタイピング", years: 3, level: "advanced" },
      { name: "アクセシビリティ", years: 2, level: "intermediate" },
    ]
  },
  {
    id: 3,
    category: "開発ツール",
    icon: Wrench,
    color: "from-orange-500 to-amber-500",
    skills: [
      { name: "Git / GitHub", years: 4, level: "advanced" },
      { name: "Docker", years: 2, level: "intermediate" },
      { name: "VS Code", years: 4, level: "advanced" },
      { name: "Storybook", years: 2, level: "intermediate" },
      { name: "Jest", years: 2, level: "intermediate" },
      { name: "Playwright", years: 1, level: "beginner" },
    ]
  },
  {
    id: 4,
    category: "手法・マインドセット",
    icon: Target,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "アジャイル開発", years: 3, level: "advanced" },
      { name: "スクラム", years: 2, level: "intermediate" },
      { name: "デザイン思考", years: 2, level: "intermediate" },
      { name: "ユーザーセンタード設計", years: 3, level: "advanced" },
      { name: "チーム開発", years: 4, level: "advanced" },
      { name: "ペアプログラミング", years: 2, level: "intermediate" },
    ]
  }
];

const certifications = [
  { name: "基本情報技術者", date: "2021年10月", icon: Award },
  { name: "応用情報技術者", date: "2022年10月", icon: Award },
  { name: "TOEIC 850点", date: "2023年3月", icon: Award },
  { name: "Google UX Design Certificate", date: "2022年5月", icon: Award },
];

const strengths = [
  {
    icon: Layers,
    title: "技術とデザインの橋渡し",
    description: "エンジニアリングとUXデザインの両方の視点を持ち、実装可能性を考慮した設計ができます。",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Users,
    title: "チームコラボレーション",
    description: "職種を超えた協働を得意とし、多様なメンバーと円滑にコミュニケーションが取れます。",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: TrendingUp,
    title: "継続的な学習姿勢",
    description: "新しい技術やデザイン手法を積極的に学び、プロジェクトに活かしています。",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Zap,
    title: "ユーザーファースト",
    description: "常にユーザーの視点に立ち、本質的な価値を届けることを最優先に考えています。",
    color: "from-amber-500 to-orange-500"
  }
];

export default function SkillsPrototype() {
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'advanced':
        return 'bg-green-100 text-green-700';
      case 'intermediate':
        return 'bg-blue-100 text-blue-700';
      case 'beginner':
        return 'bg-gray-100 text-gray-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getLevelText = (level: string) => {
    switch (level) {
      case 'advanced':
        return '熟練';
      case 'intermediate':
        return '中級';
      case 'beginner':
        return '初級';
      default:
        return '';
    }
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
              <a href="/experience" className="text-sm font-medium text-gray-700 hover:text-amber-500 transition-all hover:scale-105">
                Experience
              </a>
              <a href="/skills" className="text-sm font-medium text-amber-500 border-b-2 border-amber-500">
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
              Skills
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            これまでに習得したスキルと資格をご紹介します
          </p>
        </section>

        {/* Strengths */}
        <section className="py-12 max-w-6xl mx-auto" id="strengths" data-animate>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Strengths</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4">強み・特徴</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {strengths.map((strength, index) => {
              const Icon = strength.icon;
              return (
                <div
                  key={index}
                  className={`transition-all duration-1000 ${
                    visibleSections.has('strengths')
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 translate-x-20'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="group relative h-full">
                    <div className={`absolute inset-0 bg-gradient-to-br ${strength.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300`}></div>
                    <div className="relative h-full bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                      <div className="mb-6">
                        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${strength.color} text-white shadow-lg`}>
                          <Icon className="w-6 h-6" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-gray-900">{strength.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{strength.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Technical Skills */}
        <section className="py-12 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Skills</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4">技術スキル</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.id}
                  id={`category-${category.id}`}
                  data-animate
                  className={`transition-all duration-1000 ${
                    visibleSections.has(`category-${category.id}`)
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 translate-x-20'
                  }`}
                  style={{ transitionDelay: `${categoryIndex * 100}ms` }}
                >
                  <div className="group relative h-full">
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-all duration-300`}></div>
                    <div className="relative h-full bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                      {/* Category Header */}
                      <div className={`p-6 bg-gradient-to-r ${category.color}`}>
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-white">{category.category}</h3>
                        </div>
                      </div>

                      {/* Skills List */}
                      <div className="p-6">
                        <div className="space-y-4">
                          {category.skills.map((skill, skillIndex) => (
                            <div
                              key={skillIndex}
                              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group/skill"
                            >
                              <div className="flex items-center gap-3 flex-1">
                                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500"></div>
                                <span className="font-medium text-gray-900">{skill.name}</span>
                              </div>
                              <div className="flex items-center gap-3">
                                <span className="text-sm text-gray-600">{skill.years}年</span>
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(skill.level)}`}>
                                  {getLevelText(skill.level)}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Certifications */}
        <section className="py-12 max-w-4xl mx-auto" id="certifications" data-animate>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Certifications</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4">資格・認定</p>
          </div>
          <div className={`transition-all duration-1000 ${
            visibleSections.has('certifications')
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 translate-x-20'
          }`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-orange-500/10 rounded-2xl blur-xl"></div>
              <div className="relative bg-white border border-gray-100 rounded-2xl shadow-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {certifications.map((cert, index) => {
                    const Icon = cert.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group"
                      >
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-gray-900 mb-1">{cert.name}</h4>
                          <p className="text-sm text-gray-600">{cert.date} 取得</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Learning */}
        <section className="py-12 max-w-4xl mx-auto" id="learning" data-animate>
          <div className={`transition-all duration-1000 ${
            visibleSections.has('learning')
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-cyan-500/10 rounded-2xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-10 text-center shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-full blur-3xl"></div>
                <div className="relative">
                  <div className="inline-flex p-4 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                    <TrendingUp className="w-8 h-8 text-amber-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">継続的な学習</h3>
                  <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
                    技術の進化は早く、常に学び続ける必要があります。
                    新しいフレームワーク、デザイン手法、開発プロセスを積極的に学び、
                    プロジェクトに活かすことで、より良いプロダクト作りに貢献しています。
                  </p>
                </div>
              </div>
            </div>
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
