export type PublicationType =
  | "award"
  | "journal"
  | "international-conference"
  | "domestic-conference";

export interface Publication {
  id: number;
  type: PublicationType;
  title: string;
  authors?: string;
  venue?: string;
  year: number;
  link?: string;
}
