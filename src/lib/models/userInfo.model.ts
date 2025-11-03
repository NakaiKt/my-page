import type { LucideIcon } from "lucide-react";

export interface VisionContent {
    readonly headline: string;
    readonly description: string;
}

export interface AboutFeature {
    readonly icon: LucideIcon;
    readonly title: string;
    readonly description: string;
    readonly transitionDelayClass: string;
}