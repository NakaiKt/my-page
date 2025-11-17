import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { SkillCategory, SkillLevel } from "@/lib/models/skills.model";

type Props = {
  readonly category: SkillCategory;
};

const getLevelColor = (level: SkillLevel): string => {
  switch (level) {
    case "advanced":
      return "bg-green-100 text-green-700 hover:bg-green-100";
    case "intermediate":
      return "bg-blue-100 text-blue-700 hover:bg-blue-100";
    case "beginner":
      return "bg-gray-100 text-gray-700 hover:bg-gray-100";
  }
};

const getLevelText = (level: SkillLevel): string => {
  switch (level) {
    case "advanced":
      return "熟練";
    case "intermediate":
      return "中級";
    case "beginner":
      return "初級";
  }
};

export default function SkillCategoryCard({ category }: Props) {
  const Icon = category.icon;

  return (
    <Card className="h-full overflow-hidden">
      {/* Category Header */}
      <div className={`p-6 bg-gradient-to-r ${category.gradientClass}`}>
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white">{category.category}</h3>
        </div>
      </div>

      {/* Skills List */}
      <div className="p-6">
        <div className="space-y-4">
          {category.skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3 flex-1">
                <div
                  className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.gradientClass}`}
                />
                <span className="font-medium text-gray-900">{skill.name}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">{skill.years}年</span>
                <Badge
                  variant="secondary"
                  className={getLevelColor(skill.level)}
                >
                  {getLevelText(skill.level)}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
