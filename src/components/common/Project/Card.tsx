import React, { useState } from 'react';
import { Project, Translatable } from '../../../types/types';
import TranslatedText from '../TranslatedText/TranslatedText';
import Lightbox from 'yet-another-react-lightbox';

import "yet-another-react-lightbox/styles.css";
import { Fullscreen, Slideshow, Zoom } from 'yet-another-react-lightbox/plugins';

const viewText: Translatable = {
  cir: 'Погледај пројекат',
  lat: 'Pogledaj projekat'
};

const Card: React.FC<Project> = ({
  author,
  title,
  subject,
  backgroundImage,
  category,
  technologies
}) => {
  const [ lightBoxOpen, setLightBoxOpen ] = useState<boolean>(false);

  const techList = Array.isArray(technologies)
    ? technologies
    : technologies.split(/,\s*/);
  
  const handleClick = () => {
    if (category === 3) {
      setLightBoxOpen(true);
    }
  }

  return (
    <>
      <div className="mx-auto relative group w-full max-w-sm bg-white rounded-2xl shadow-md ring-1 ring-gray-200 overflow-hidden transition-transform transform hover:scale-105">
        {/* Accent bar */}
        <div className="absolute top-0 left-0 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500" />

        <div className="relative h-48 overflow-hidden">
          <img
            src={backgroundImage}
            alt={typeof title === 'string' ? title : ''}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
          />

          {/* Glassy overlay */}
          <div className="absolute inset-0 bg-black/50 bg-opacity-20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6">
            <div className="flex flex-wrap gap-2 mb-4">
              {techList.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-white bg-opacity-70 text-xs font-medium text-gray-700 px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <button 
              onClick={handleClick}
              className="cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold px-5 py-2 rounded-full shadow-lg hover:opacity-90 transition-opacity duration-200"
            >
              <TranslatedText text={viewText} />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-2">
          <span className="inline-block text-xs uppercase tracking-wider text-blue-500 bg-blue-50 px-2 py-1 rounded-full">
            <TranslatedText text={subject} />
          </span>
          <h4 className="text-xl font-semibold text-gray-900">
            <TranslatedText text={title} />
          </h4>
          <p className="text-sm text-gray-600">
            <TranslatedText text={author} />
          </p>
        </div>
      </div>
      {
        category === 3 && (
          <Lightbox 
            open={lightBoxOpen}
            close={() => setLightBoxOpen(false)}
            carousel={{ finite: true }}
            plugins={[Slideshow, Fullscreen, Zoom]}
            render={{
              buttonPrev: () => null,
              buttonNext: () => null,
            }}
            slides={[
              { src: backgroundImage }
            ]}
            zoom={{ 
              maxZoomPixelRatio: 2, 
              scrollToZoom: true, 
              doubleTapDelay: 300,
              zoomInMultiplier: 1.2
            }}
          />
        )
      }
    </>
  );
};

export default Card;
