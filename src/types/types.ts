export type Language = 'lat' | 'cir';

export type Translatable = {
  [lang in Language]: string;
}

export type Image = {
  src: string;
  alt: Translatable;
}