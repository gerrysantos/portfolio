import type { IconType } from "react-icons";
export interface Skill {
  title: string;
  items: { name: string; icon?: IconType }[];
}
