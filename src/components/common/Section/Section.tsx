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
      content = <div className="flex flex-col gap-4 text-justify" dangerouslySetInnerHTML={{ __html: getTranslatedString(text!, selectedLanguage) }} />
      break;

    case 'images':
      content = (image as Image[]).map((image, index) => (
        <img key={index} src={image.src} alt={image?.alt ? getTranslatedString(image.alt, selectedLanguage) : ''} />
      ));
      content = (
        <div className="flex gap-4 flex-wrap">
          { content }
        </div>
      )
      break;

    case 'text-image':
      content = (
        <div className={clsx('flex flex-1 gap-8 flex-wrap lg:flex-nowrap', inverse && 'flex-row-reverse')}>
          <p className="w-full lg:w-2/3 text-justify" dangerouslySetInnerHTML={{ __html: getTranslatedString(text!, selectedLanguage) }} />
          <img className="w-full lg:w-1/3" src={(image as Image).src} alt={(image as Image)?.alt ? getTranslatedString((image as Image).alt!, selectedLanguage) : ''} />
        </div>
      );
      break;

    default: 
      content = null;
  }

  return (
    <section id={title ? getTranslatedString(title, selectedLanguage) : 'Sekcija'}>
      {
        title && (
          <h3 className="text-2xl mt-4 mb-2">
            <TranslatedText text={title} />
          </h3>
        )
      }
      
      <div>
        { content }
      </div>
    </section>
  );
}

export default Section