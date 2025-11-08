import { Calendar, Briefcase, Code, TrendingUp, Users } from "lucide-react";
import { cn } from "@/lib/utils";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

import type { Experience } from "@/lib/models/experience.model";
import SectionTemplate from "./SectionTemplate";

type Props = {
  readonly experience: Experience;
  readonly isVisible: boolean;
  readonly transitionDelay: string;
};

export default function ExperienceCard({
  experience,
  isVisible,
  transitionDelay,
}: Props) {
  const Icon = experience.icon;

  return (
    <Card
      className={cn(
        "transition-all duration-1000",
        transitionDelay,
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20",
      )}
    >
      <Accordion type="single" collapsible>
        <AccordionItem value={`experience-${experience.id}`} className="border-0">
          <AccordionTrigger className="px-6 hover:no-underline hover:bg-gray-50/50 rounded-t-lg">
            <div className="flex items-start gap-4 w-full">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-lg flex-shrink-0">
                <Icon className="h-6 w-6" />
              </div>
              <div className="flex-1 min-w-0 text-left">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span className="text-sm text-gray-600">
                    {experience.period}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {experience.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {experience.roles.map((role) => (
                    <Badge
                      key={role}
                      variant="secondary"
                      className="bg-amber-100 text-amber-700 hover:bg-amber-100"
                    >
                      <Briefcase className="w-3 h-3" />
                      {role}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  {experience.summary}
                </p>
                <div className="flex flex-wrap gap-2">
                  {experience.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </AccordionTrigger>

          <AccordionContent className="px-6 pb-6">
            <div className="space-y-6 pt-4">
              <SectionTemplate
                icon={TrendingUp}
                title="背景・課題"
                content={experience.details.background}
                gradientClass="from-blue-500 to-cyan-500"
              />
              <SectionTemplate
                icon={Code}
                title="解決策・アプローチ"
                content={experience.details.solution}
                gradientClass="from-purple-500 to-pink-500"
              />
              <SectionTemplate
                icon={TrendingUp}
                title="成果"
                content={experience.details.results}
                gradientClass="from-green-500 to-emerald-500"
              />
              <SectionTemplate
                icon={Users}
                title="協働のエピソード"
                content={experience.details.collaboration}
                gradientClass="from-amber-500 to-orange-500"
              />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
}
