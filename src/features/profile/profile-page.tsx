"use client";

import {
  Briefcase,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
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
          className={`transition-all duration-1000 ${
            visibleSections.has("basic-info")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
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

      {/* Career History (Education + Work) */}
      <section id="career" data-animate>
        <SectionTitle title="経歴" description="Career History" />
        <div
          className={`transition-all duration-1000 delay-200 ${
            visibleSections.has("career")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
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
