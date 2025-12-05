"use client";

import {
  Briefcase,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  User,
} from "lucide-react";
import { useEffect, useState } from "react";

import SectionTitle from "@/components/SectionTitle";
import { Card } from "@/components/ui/card";
import {
  BASIC_INFO,
  CAREER_HISTORY,
  EDUCATION_HISTORY,
} from "@/lib/constants/profile";
import { getSlideUpAnimation } from "@/lib/utils";

export default function ProfilePage() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set()
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setVisibleSections((prev) => {
              if (prev.has(sectionId)) {
                return prev;
              }
              const next = new Set(prev);
              next.add(sectionId);
              return next;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements =
      document.querySelectorAll<HTMLElement>("[data-animate]");
    animatedElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="py-20 max-w-4xl mx-auto space-y-20">
      {/* Basic Information */}
      <section id="basic-info" data-animate>
        <SectionTitle title="基本情報" description="Basic Information" />
        <div
          className={getSlideUpAnimation(visibleSections.has("basic-info"), 10)}
        >
          <Card className="p-8">
            <div className="space-y-6">
              {/* Name */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg">
                    <User className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 mb-1">氏名</h4>
                  <p className="text-gray-700">
                    {BASIC_INFO.name} ({BASIC_INFO.nameKana})
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 mb-1">メール</h4>
                  <a
                    href={`mailto:${BASIC_INFO.email}`}
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    {BASIC_INFO.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 mb-1">電話番号</h4>
                  <p className="text-gray-700">{BASIC_INFO.phone}</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 mb-1">住所</h4>
                  <p className="text-gray-700">{BASIC_INFO.address}</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* MBTI */}
      <section id="mbti" data-animate>
        <SectionTitle title="MBTI" description="Personality Type" />
        <div
          className={getSlideUpAnimation(
            visibleSections.has("mbti"),
            10,
            "delay-100"
          )}
        >
          <Card className="p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900 mb-1">ENFJ-T</h4>
                <p className="text-lg text-gray-700 mb-2">主人公 (The Protagonist)</p>
                <p className="text-sm text-gray-600 mb-3">
                  カリスマ性があり、人を励ます生まれついてのリーダー
                </p>
                <a
                  href="https://www.16personalities.com/ja/enfj%E5%9E%8B%E3%81%AE%E6%80%A7%E6%A0%BC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  詳しく見る
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Career History (Education + Work) */}
      <section id="career" data-animate>
        <SectionTitle title="経歴" description="Career History" />
        <div
          className={getSlideUpAnimation(
            visibleSections.has("career"),
            10,
            "delay-200"
          )}
        >
          <Card className="p-8">
            <div className="space-y-8">
              {/* Education Section */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-amber-500" />
                  学歴
                </h3>
                <div className="space-y-6">
                  {EDUCATION_HISTORY.map((edu, index) => (
                    <div
                      key={edu.id}
                      className={`flex items-start gap-4 ${
                        index !== EDUCATION_HISTORY.length - 1
                          ? "pb-6 border-b border-gray-100"
                          : ""
                      }`}
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg">
                          <GraduationCap className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-baseline gap-2 mb-2">
                          <span className="font-bold text-gray-900">
                            {edu.year}年{edu.month}月
                          </span>
                          <span className="text-sm text-gray-600">
                            {edu.status}
                          </span>
                        </div>
                        <h4 className="font-medium text-gray-900 mb-1">
                          {edu.institution}
                        </h4>
                        {edu.department && (
                          <p className="text-sm text-gray-600">
                            {edu.department}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Career Section */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-blue-500" />
                  職歴
                </h3>
                <div className="space-y-6">
                  {(() => {
                    // Group career history by company
                    const companies: {
                      [key: string]: {
                        join: (typeof CAREER_HISTORY)[0];
                        leave?: (typeof CAREER_HISTORY)[0];
                      };
                    } = {};

                    CAREER_HISTORY.forEach((career) => {
                      if (career.status === "入社") {
                        companies[career.company] = { join: career };
                      } else if (career.status === "退社") {
                        if (companies[career.company]) {
                          companies[career.company].leave = career;
                        }
                      }
                    });

                    return Object.entries(companies).map(
                      ([companyName, { join, leave }], index) => {
                        const startDate = `${join.year}年${join.month}月`;
                        const endDate = leave
                          ? `${leave.year}年${leave.month}月`
                          : "現在";
                        const period = `${startDate} 〜 ${endDate}`;

                        return (
                          <div
                            key={join.id}
                            className={`flex items-start gap-4 ${
                              index !== Object.keys(companies).length - 1
                                ? "pb-6 border-b border-gray-100"
                                : ""
                            }`}
                          >
                            <div className="flex-shrink-0">
                              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                                <Briefcase className="w-6 h-6 text-white" />
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-baseline gap-2 mb-2">
                                <span className="font-bold text-gray-900">
                                  {period}
                                </span>
                              </div>
                              <h4 className="font-medium text-gray-900">
                                {companyName}
                              </h4>
                            </div>
                          </div>
                        );
                      }
                    );
                  })()}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
