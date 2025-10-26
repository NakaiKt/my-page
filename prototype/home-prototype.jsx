import React, { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, FileText, BookOpen, Sparkles, Zap, Target, Code, Palette } from 'lucide-react';

export default function HomePrototype() {
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
              <a href="/skills" className="text-sm font-medium text-gray-700 hover:text-amber-500 transition-all hover:scale-105">
                Skills
              </a>
            </div>
          </div>
        </nav>
      </header>
      
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
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .delay-0 {
          transition-delay: 0ms;
        }
        .delay-75 {
          transition-delay: 75ms;
        }
        .delay-100 {
          transition-delay: 100ms;
        }
        .delay-150 {
          transition-delay: 150ms;
        }
        .delay-200 {
          transition-delay: 200ms;
        }
        .delay-300 {
          transition-delay: 300ms;
        }
      `}</style>

      <main className="container mx-auto px-4 py-12 relative">
        {/* First View */}
        <section className="py-20 text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 via-transparent to-orange-400/10 blur-3xl"></div>
          <div className="relative">
            <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-6xl shadow-2xl transform hover:scale-110 transition-transform duration-300 ring-4 ring-amber-200">
              👤
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 bg-clip-text text-transparent animate-gradient">
              山田 太郎
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-4 font-medium">
              エンジニア・UXデザイナー
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full border border-amber-200 text-gray-600">
              <Zap className="w-4 h-4 text-amber-500" />
              <span className="text-sm">@ 株式会社サンプル</span>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="py-20 max-w-4xl mx-auto" id="vision" data-animate>
          <div className={`relative transition-all duration-1000 ${visibleSections.has('vision') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 to-orange-500 rounded-3xl opacity-10 blur-2xl"></div>
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-sm rounded-3xl p-12 border border-gray-700 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-full blur-3xl"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-1 h-12 bg-gradient-to-b from-amber-500 to-orange-500 rounded-full"></div>
                  <h2 className="text-3xl font-bold text-white">Vision</h2>
                </div>
                <p className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                  「勉強が嫌い」という<br />子供を０にする
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  子供たちが学ぶことの楽しさを発見し、自ら学び続けられる環境を作ることを目指しています。
                  テクノロジーとデザインの力で、教育体験をより良いものにしていきたいと考えています。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Me */}
        <section className="py-20 max-w-5xl mx-auto" id="about" data-animate>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Code,
                title: "エンジニアリング",
                description: "技術的な実装とユーザー体験の両方を考慮した開発を行います。なぜその機能が必要なのか、常に問い続けています。",
                delay: "delay-0"
              },
              {
                icon: Palette,
                title: "UXデザイン",
                description: "過度な装飾を避け、シンプルで使いやすいデザインを心がけています。必要最小限で迷わせない設計を実践します。",
                delay: "delay-100"
              },
              {
                icon: Target,
                title: "チームワーク",
                description: "エンジニア、デザイナー、プロダクトマネージャーと協働し、より良いプロダクトを作ることにやりがいを感じています。",
                delay: "delay-200"
              },
              {
                icon: Zap,
                title: "価値創出",
                description: "常にユーザーファーストの姿勢を忘れず、価値あるプロダクトを届けることに情熱を注いでいます。",
                delay: "delay-300"
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`transition-all duration-1000 ${item.delay} ${
                    visibleSections.has('about')
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 translate-x-20'
                  }`}
                >
                  <div className="group relative h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-300"></div>
                    <div className="relative h-full bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                      <div className="mb-6">
                        <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-lg">
                          <Icon className="w-6 h-6" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-gray-900">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Favorites Gallery */}
        <section className="py-20" id="favorites" data-animate>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Favorites</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4">すきなもの・大切にしていること</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { emoji: "☕", title: "コーヒー", description: "朝のコーヒーから1日が始まります", color: "from-amber-400 to-orange-400", delay: "delay-0" },
              { emoji: "📚", title: "読書", description: "様々なジャンルの本から学びを得ています", color: "from-blue-400 to-cyan-400", delay: "delay-75" },
              { emoji: "🎨", title: "デザイン", description: "美しく機能的なデザインが好きです", color: "from-pink-400 to-rose-400", delay: "delay-150" },
              { emoji: "🤝", title: "チームワーク", description: "一緒に働く仲間を大切にしています", color: "from-green-400 to-emerald-400", delay: "delay-0" },
              { emoji: "🌱", title: "成長", description: "日々新しいことを学び続けたいです", color: "from-lime-400 to-green-400", delay: "delay-75" },
              { emoji: "🎯", title: "ユーザー視点", description: "常にユーザーのことを考えています", color: "from-purple-400 to-indigo-400", delay: "delay-150" },
            ].map((item, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 ${item.delay} ${
                  visibleSections.has('favorites')
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-20'
                }`}
              >
                <div className="group relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}></div>
                  <div className="relative p-8 bg-white border border-gray-100 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                    <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{item.emoji}</div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Skills */}
        <section className="py-20 max-w-5xl mx-auto" id="skills" data-animate>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tech Stack</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full"></div>
          </div>
          <div className={`relative transition-all duration-1000 ${
            visibleSections.has('skills')
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 translate-x-20'
          }`}>
            <div className="relative flex flex-wrap gap-4 justify-center p-8">
              {[
                { name: "React", color: "from-cyan-500 to-blue-500", shadow: "shadow-cyan-500/50" },
                { name: "TypeScript", color: "from-blue-500 to-indigo-500", shadow: "shadow-blue-500/50" },
                { name: "Next.js", color: "from-gray-700 to-gray-900", shadow: "shadow-gray-700/50" },
                { name: "Tailwind CSS", color: "from-cyan-400 to-teal-500", shadow: "shadow-cyan-400/50" },
                { name: "Figma", color: "from-purple-500 to-pink-500", shadow: "shadow-purple-500/50" },
                { name: "UXデザイン", color: "from-amber-500 to-orange-500", shadow: "shadow-amber-500/50" },
                { name: "アジャイル開発", color: "from-green-500 to-emerald-500", shadow: "shadow-green-500/50" },
                { name: "UI/UXリサーチ", color: "from-rose-500 to-pink-500", shadow: "shadow-rose-500/50" },
              ].map((skill, index) => (
                <span
                  key={index}
                  className={`group relative px-6 py-3 rounded-xl text-sm font-semibold text-white overflow-hidden transform hover:scale-110 transition-all duration-300 cursor-pointer hover:${skill.shadow} hover:shadow-xl`}
                >
                  <span className={`absolute inset-0 bg-gradient-to-r ${skill.color}`}></span>
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {skill.name}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* SNS Links */}
        <section className="py-20" id="social" data-animate>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Connect</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full"></div>
          </div>
          <div className={`flex justify-center gap-6 transition-all duration-1000 ${
            visibleSections.has('social')
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}>
            {[
              { icon: Github, href: "https://github.com", label: "GitHub", color: "hover:bg-gray-900" },
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", color: "hover:bg-blue-600" },
              { icon: FileText, href: "https://wantedly.com", label: "Wantedly", color: "hover:bg-green-600" },
              { icon: BookOpen, href: "https://note.com", label: "Note", color: "hover:bg-emerald-600" },
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative p-5 rounded-2xl border-2 border-gray-200 ${social.color} hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-2xl bg-white overflow-hidden`}
                  aria-label={social.label}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-orange-400/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <Icon className="relative z-10 w-7 h-7 text-gray-700 group-hover:text-white transition-colors" />
                </a>
              );
            })}
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
    </div>
  );
}
