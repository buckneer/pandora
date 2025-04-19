import { Image, Translatable } from "./types";
import type { RemixiconComponentType } from "@remixicon/react";


export type NavbarItem = {
  label: Translatable,
  url: string;
}

export type NavbarSocial = {
  icon: RemixiconComponentType;
  url: string;
}

export interface Footer {
  
}

export interface Navbar {
  backgroundColor?: string;
  links: NavbarItem[];
  socials: NavbarSocial[];
  logo: string;
}

export interface Hero {
  backgroundImage: string;
  mobileImage: string;
  title: Translatable;
  subtitle: Translatable;
  buttonText: Translatable;
  buttonUrl: string;
}

export interface DepartmentPage {
  title: Translatable;
  subtitle: Translatable;
  sections: ISection[];
}

export type SectionType = 'text-image' | 'text' | 'images';

export interface ISection {
  type: SectionType;
  inverse?: boolean;
  title: Translatable;
  text?: Translatable;
  image?: Image | Image[];
}