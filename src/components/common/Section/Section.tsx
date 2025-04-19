import React from 'react'
import { ISection } from '../../../types/data.types'
import { useLanguage } from '../../../context/LanguageContext';
import { getTranslatedString } from '../../../utils/utils';
import TranslatedText from '../TranslatedText/TranslatedText';
import { Image } from '../../../types/types';
import clsx from 'clsx';

const Section: React.FC<ISection> = ({
  title, type, image, inverse, text
}) => {
  const { selectedLanguage } = useLanguage();

  let content = null;

  switch (type) {
    case 'text': 
      content = <p><TranslatedText text={text!} /></p>
      break;

    case 'images':
      content = (image as Image[]).map((image, index) => (
        <img key={index} src={image.src} alt={getTranslatedString(image.alt, selectedLanguage)} />
      ));
      break;

    case 'text-image':
      content = (
        <div className={clsx('flex flex-1 gap-4', inverse && 'flex-row-reverse')}>
          <p className="flex-1"><TranslatedText text={text!} /></p>
          <img src={(image as Image).src} alt={getTranslatedString((image as Image).alt, selectedLanguage)} />
        </div>
      );
      break;

    default: 
      content = null;
  }

  return (
    <section id={getTranslatedString(title, selectedLanguage)}>
      <h2 className="text-2xl"><TranslatedText text={title} /></h2>
      <div>
        { content }
      </div>
    </section>
  );
}

export default Section