import { Translatable } from "./types"

export type NavbarItem = {
  label: Translatable,
  url: string;
}

export type NavbarSocial = {
  icon: string;
  url: string;
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