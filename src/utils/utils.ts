import { Language, Translatable } from "../types/types";

export const getTranslatedString = (translatable: Translatable, language: Language): string => translatable[language];