import React from 'react';
import { Project, Translatable } from '../../../types/types';
import TranslatedText from '../TranslatedText/TranslatedText';

const viewText: Translatable = {
  cir: 'Погледај пројекат',
  lat: 'Pogledaj projekat' 
}

const Card: React.FC<Project> = ({
  author, title, subject, backgroundImage, technologies
}) => {
  return (
    <div className="relative group w-[320px]">
      <div className="relative rounded-lg w-full h-[160px] overflow-hidden">
        <img className="w-full h-full object-cover" src={backgroundImage}  />

        <div className="absolute inset-0 bg-black translate-y-full bg-opacity-50 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex flex-col items-center justify-center gap-4">
          <p className="text-white text-sm font-medium">{ technologies }</p>
          <button className="text-white border px-4 py-2 rounded-lg cursor-pointer">
            <TranslatedText text={viewText} />
          </button>
        </div>
      </div>

      <div className="mt-2">
        <span className="text-xs opacity-60">
          <TranslatedText text={subject} />
        </span>
        <h4 className="text-xl">
          <TranslatedText text={title} />
        </h4>
        <p className="opacity-80">
          <TranslatedText text={author} />
        </p>
      </div>
    </div>
  );
};

export default Card;
