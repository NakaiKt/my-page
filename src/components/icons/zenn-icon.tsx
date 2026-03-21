import type { SVGProps } from "react";

export default function ZennIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <text
        x="12"
        y="17"
        textAnchor="middle"
        fontSize="16"
        fontWeight="bold"
        fontFamily="serif"
        fill="currentColor"
        stroke="none"
      >
        Z
      </text>
    </svg>
  );
}
