export type HomeSectionId =
  | "vision"
  | "about"
  | "favorites"
  | "skills"
  | "social";

export interface HomeProfile {
  readonly name: string;
  readonly title: string;
  readonly company: string;
}
