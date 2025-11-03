import { Mail } from "lucide-react";

import { USER_META } from "@/lib/constants/userMeta";

export default function SiteFooter() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-amber-500 rounded-full" />
            <h3 className="text-2xl font-bold text-gray-900">Contact</h3>
          </div>
          <p className="text-gray-700 mb-6 text-lg">
            お仕事のご相談はこちらからお気軽にどうぞ
          </p>
          <a
            href={`mailto:${USER_META.email}`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 text-white font-semibold rounded-xl transition duration-300 hover:scale-105 hover:shadow-2xl group"
          >
            <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span>{USER_META.email}</span>
          </a>
        </div>
        <div className="text-center mt-10 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
