import React from 'react'
import { useLanguage } from '../../../context/LanguageContext';
import { Translatable } from '../../../types/types';

interface TranslatableProps {
  text: Translatable;
}

const TranslatedText: React.FC<TranslatableProps> = ({ text }) => {
  const { selectedLanguage } = useLanguage();
  
  return (
    <>{ text[selectedLanguage] }</>
  )
}

export default TranslatedText;