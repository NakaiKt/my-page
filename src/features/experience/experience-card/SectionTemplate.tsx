import type { LucideIcon } from "lucide-react";

type Props = {
  readonly icon: LucideIcon;
  readonly title: string;
  readonly content: string;
  readonly gradientClass: string;
};

export default function SectionTemplate({
  icon: Icon,
  title,
  content,
  gradientClass,
}: Props) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <div
          className={`w-8 h-8 rounded-lg bg-gradient-to-br ${gradientClass} flex items-center justify-center`}
        >
          <Icon className="w-4 h-4 text-white" />
        </div>
        <h4 className="text-lg font-bold text-gray-900">{title}</h4>
      </div>
      <p className="text-gray-700 leading-relaxed pl-10">{content}</p>
    </div>
  );
}
