import { Award, BookOpen, ExternalLink } from "lucide-react";

import SectionTitle from "@/components/SectionTitle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PUBLICATIONS } from "@/lib/constants/publications";
import type { Publication } from "@/lib/models/publications.model";
import { getSlideUpAnimation } from "@/lib/utils";

interface PublicationsSectionProps {
  isVisible: boolean;
}

const getPublicationTypeLabel = (type: Publication["type"]): string => {
  switch (type) {
    case "award":
      return "表彰";
    case "journal":
      return "論文誌";
    case "international-conference":
      return "国際学会";
    case "domestic-conference":
      return "国内学会";
  }
};

const getPublicationTypeColor = (type: Publication["type"]): string => {
  switch (type) {
    case "award":
      return "from-yellow-500 to-amber-500";
    case "journal":
      return "from-purple-500 to-pink-500";
    case "international-conference":
      return "from-blue-500 to-cyan-500";
    case "domestic-conference":
      return "from-green-500 to-emerald-500";
  }
};

export default function PublicationsSection({
  isVisible,
}: PublicationsSectionProps) {
  // Display publications in descending order (newest first)
  const sortedPublications = [...PUBLICATIONS].reverse();

  return (
    <section id="publications" data-animate="true">
      <SectionTitle
        title="表彰・学会発表"
        description="Awards & Publications"
      />
      <div className={getSlideUpAnimation(isVisible, 10)}>
        <div className="space-y-4">
          {sortedPublications.map((publication, index) => (
            <Card
              key={publication.id}
              className={`p-6 hover:shadow-lg transition-all duration-300 delay-${index * 50}`}
            >
              <div className="flex gap-4">
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-full bg-gradient-to-br ${getPublicationTypeColor(
                    publication.type
                  )} flex items-center justify-center shadow-md flex-shrink-0`}
                >
                  {publication.type === "award" ? (
                    <Award className="w-7 h-7 text-white" />
                  ) : (
                    <BookOpen className="w-7 h-7 text-white" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 space-y-2">
                  {/* Type Badge and Year */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge variant="outline" className="text-xs">
                      {getPublicationTypeLabel(publication.type)}
                    </Badge>
                    <span className="text-sm text-gray-500">
                      {publication.year}年
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 leading-snug">
                    {publication.title}
                  </h3>

                  {/* Authors */}
                  {publication.authors && (
                    <p className="text-sm text-gray-600">
                      {publication.authors}
                    </p>
                  )}

                  {/* Venue */}
                  {publication.venue && (
                    <p className="text-sm text-gray-700 font-medium">
                      {publication.venue}
                    </p>
                  )}

                  {/* Link */}
                  {publication.link && (
                    <div className="pt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="h-8"
                      >
                        <a
                          href={publication.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span className="text-xs">詳細を見る</span>
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
