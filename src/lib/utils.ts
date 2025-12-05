import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Returns class names for a slide-up fade-in animation
 * @param isVisible - Whether the element should be visible
 * @param translateY - The Y-axis translation distance in Tailwind units (default: 20)
 * @param delay - Optional delay class (e.g., "delay-100", "delay-200")
 * @returns Tailwind class names for the animation
 */
export function getSlideUpAnimation(
  isVisible: boolean,
  translateY: number = 20,
  delay?: string
): string {
  // Use complete class names for Tailwind's static analysis
  const translateClass = translateY === 10 ? "translate-y-10" : "translate-y-20";

  return cn(
    "transition-all duration-1000",
    delay,
    isVisible ? "opacity-100 translate-y-0" : `opacity-0 ${translateClass}`
  )
}
