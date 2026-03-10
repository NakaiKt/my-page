export type HomeSectionId =
  | "vision"
  | "about"
  | "favorites"
  | "skills";

export interface HomeProfile {
  readonly name: string;
  readonly title: string;
  readonly company: string;
}
