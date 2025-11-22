import { ArrowRight } from "lucide-react";
import Link from "next/link";

type Props = {
  href: string;
  text: string;
};
const ArrowButton = ({ href, text }: Props) => {
  return (
    <div className="mt-8 flex justify-center">
      <Link
        href={href}
        className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg hover:scale-105"
      >
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        <span>{text}</span>
      </Link>
    </div>
  );
};
export default ArrowButton;
