import { Mail } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { USER_INFO } from "@/lib/constants/userInfo";
import { USER_META } from "@/lib/constants/userMeta";

export default function SiteFooter() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-amber-500 rounded-full" />
            <h3 className="text-gray-900">Contact</h3>
          </div>
          <p className="text-gray-700 mb-6 text-lg">
            ご連絡はこちらからお気軽にどうぞ
          </p>
          <div className="flex justify-center gap-4 mb-6">
            {USER_INFO.CONTACT_LINKS.map((social) => {
              const Icon = social.icon;
              return (
                <Tooltip key={social.label}>
                  <TooltipTrigger>
                    <Button
                      variant="outline"
                      size="icon"
                      className={`size-14 group relative rounded-2xl border-2 border-gray-200 transition duration-300 hover:scale-110 hover:shadow-2xl bg-white overflow-hidden ${social.hoverClass}`}
                      asChild
                    >
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon className="size-6 text-gray-700 transition-colors group-hover:text-white" />
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>{social.label}</TooltipContent>
                </Tooltip>
              );
            })}
            <Tooltip>
              <TooltipTrigger>
                <Button
                  variant="outline"
                  size="icon"
                  className="size-14 group relative rounded-2xl border-2 border-gray-200 transition duration-300 hover:scale-110 hover:shadow-2xl bg-white overflow-hidden hover:bg-amber-500"
                  asChild
                >
                  <a href={`mailto:${USER_META.email}`}>
                    <Mail className="size-6 text-gray-700 transition-colors group-hover:text-white" />
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>{USER_META.email}</TooltipContent>
            </Tooltip>
          </div>
        </div>
        <div className="text-center mt-10 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
