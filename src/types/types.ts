export type Language = 'lat' | 'cir';

export type Translatable = {
  [lang in Language]: string;
}

export type Image = {
  src: string;
  alt: Translatable;
}

export type ProjectCategory = {
  id: number;
  title: Translatable;
}

export type Project = {
  author: Translatable;
  subject: Translatable;
  category: number;
  title: Translatable;
  technologies: string; // this is not translatable
  backgroundImage: string;
  // etc...
}