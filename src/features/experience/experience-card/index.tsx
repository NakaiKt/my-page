import { cn } from "@/lib/utils";
import { Briefcase, Calendar, Code, TrendingUp, Users } from "lucide-react";

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

  const hasDetails =
    experience.details.background ||
    experience.details.solution ||
    experience.details.results ||
    experience.details.collaboration;

  const cardContent = (
    <div className="flex items-start gap-4 w-full">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-lg flex-shrink-0">
        <Icon className="h-6 w-6" />
      </div>
      <div className="flex-1 min-w-0 text-left">
        <div className="flex items-center gap-2 mb-2">
          <Calendar className="w-4 h-4 text-amber-500 flex-shrink-0" />
          <span className="text-sm text-gray-600">
            {experience.start.year}年{experience.start.month}月 〜{" "}
            {experience.end
              ? `${experience.end.year}年${experience.end.month}月`
              : "現在"}
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
              className="bg-amber-100 text-amber-700"
            >
              <Briefcase className="w-3 h-3" />
              {role}
            </Badge>
          ))}
          {experience.projectScale && (
            <Badge variant="secondary" className="bg-blue-100 text-blue-700">
              <Users className="w-3 h-3" />
              {experience.projectScale}
            </Badge>
          )}
        </div>
        <p className="text-sm text-gray-600 mb-4">{experience.summary}</p>
        <div className="flex flex-wrap gap-2">
          {experience.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <Card
      className={cn(
        "transition-all duration-1000",
        transitionDelay,
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      )}
    >
      {hasDetails ? (
        <Accordion type="single" collapsible>
          <AccordionItem
            value={`experience-${experience.id}`}
            className="border-0"
          >
            <AccordionTrigger className="px-6 hover:no-underline hover:bg-gray-50/50 rounded-t-lg">
              {cardContent}
            </AccordionTrigger>

            <AccordionContent className="px-6 pb-6">
              <div className="space-y-6 pt-4">
                {experience.details.background && (
                  <SectionTemplate
                    icon={TrendingUp}
                    title="背景・課題"
                    content={experience.details.background}
                    gradientClass="from-blue-500 to-cyan-500"
                  />
                )}
                {experience.details.solution && (
                  <SectionTemplate
                    icon={Code}
                    title="解決策・アプローチ"
                    content={experience.details.solution}
                    gradientClass="from-purple-500 to-pink-500"
                  />
                )}
                {experience.details.results && (
                  <SectionTemplate
                    icon={TrendingUp}
                    title="成果"
                    content={experience.details.results}
                    gradientClass="from-green-500 to-emerald-500"
                  />
                )}
                {experience.details.collaboration && (
                  <SectionTemplate
                    icon={Users}
                    title="協働のエピソード"
                    content={experience.details.collaboration}
                    gradientClass="from-amber-500 to-orange-500"
                  />
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ) : (
        <div className="px-6 py-6">{cardContent}</div>
      )}
    </Card>
  );
}
