import { Card } from "@/components/ui/card";
import type { SkillCategory } from "@/lib/models/skills.model";

type Props = {
  readonly category: SkillCategory;
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
              <span className="text-sm text-gray-600">{skill.years}年</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
