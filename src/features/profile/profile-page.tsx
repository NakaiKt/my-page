"use client";

import { useEffect, useState } from "react";
import { User, Mail, Phone, MapPin, GraduationCap } from "lucide-react";

import SectionTitle from "@/components/SectionTitle";
import { Card } from "@/components/ui/card";
import { BASIC_INFO, EDUCATION_HISTORY } from "@/lib/constants/profile";

export default function ProfilePage() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set(),
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
      { threshold: 0.1 },
    );

    const animatedElements = document.querySelectorAll<HTMLElement>(
      "[data-animate]",
    );
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
                  <p className="text-gray-700">{BASIC_INFO.name}</p>
                  <p className="text-sm text-gray-500">{BASIC_INFO.nameKana}</p>
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

      {/* Education History */}
      <section id="education" data-animate>
        <SectionTitle title="学歴" description="Education" />
        <div
          className={`transition-all duration-1000 delay-200 ${
            visibleSections.has("education")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <Card className="p-8">
            <div className="space-y-6">
              {EDUCATION_HISTORY.map((edu, index) => (
                <div
                  key={edu.id}
                  className={`flex items-start gap-4 ${
                    index !== EDUCATION_HISTORY.length - 1
                      ? "pb-6 border-b border-gray-200"
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
                      <p className="text-sm text-gray-600">{edu.department}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
