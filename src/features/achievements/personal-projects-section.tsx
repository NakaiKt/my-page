import { ExternalLink, Github } from "lucide-react";

import SectionTitle from "@/components/SectionTitle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PERSONAL_ACHIEVEMENTS } from "@/lib/constants/achievements";
import { getSlideUpAnimation } from "@/lib/utils";

interface PersonalProjectsSectionProps {
  isVisible: boolean;
}

export default function PersonalProjectsSection({
  isVisible,
}: PersonalProjectsSectionProps) {
  return (
    <section id="personal-projects" data-animate="true">
      <SectionTitle title="個人プロジェクト" description="Personal Projects" />
      <div className={getSlideUpAnimation(isVisible, 10)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PERSONAL_ACHIEVEMENTS.length > 0 ? (
            PERSONAL_ACHIEVEMENTS.map((achievement, index) => (
              <Card
                key={achievement.id}
                className={`p-6 hover:shadow-xl transition-all duration-300 delay-${index * 100}`}
              >
                <div className="space-y-4">
                  {/* Icon and Period */}
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg">
                      <achievement.icon className="w-6 h-6 text-white" />
                    </div>
                    {achievement.period && (
                      <span className="text-sm text-gray-500">
                        {achievement.period}
                      </span>
                    )}
                  </div>

                  {/* Title and Description */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {achievement.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Links */}
                  {achievement.links && (
                    <div className="flex gap-2 pt-2">
                      {achievement.links.github && (
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="flex-1"
                        >
                          <a
                            href={achievement.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <Github className="w-4 h-4" />
                            <span>GitHub</span>
                          </a>
                        </Button>
                      )}
                      {achievement.links.page && (
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="flex-1"
                        >
                          <a
                            href={achievement.links.page}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>Page</span>
                          </a>
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </Card>
            ))
          ) : (
            <div className="col-span-2">
              <Card className="p-12 text-center">
                <p className="text-gray-500">個人プロジェクトは準備中です</p>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
