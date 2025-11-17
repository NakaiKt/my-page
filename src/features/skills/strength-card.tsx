import { Card } from "@/components/ui/card";
import type { Strength } from "@/lib/models/skills.model";

type Props = {
  readonly strength: Strength;
};

export default function StrengthCard({ strength }: Props) {
  const Icon = strength.icon;

  return (
    <Card className="h-full p-8">
      <div className="mb-6">
        <div
          className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${strength.gradientClass} text-white shadow-lg`}
        >
          <Icon className="w-6 h-6" />
        </div>
      </div>
      <h3 className="text-xl font-bold mb-4 text-gray-900">{strength.title}</h3>
      <p className="text-gray-600 leading-relaxed">{strength.description}</p>
    </Card>
  );
}
