import Hero from "../components/common/Hero/Hero";
import Section from "../components/common/Section/Section";
import { Helmet } from 'react-helmet';

import university from "../data/pages/university"
import { Translatable } from "../types/types";
import { useLanguage } from "../context/LanguageContext";
import { getTranslatedString } from "../utils/utils";

const title: Translatable = {
  cir: 'О факултету | Пандора',
  lat: 'O fakultetu | Pandora'
}

function Uni() {
  const { selectedLanguage } = useLanguage();
  return (
    <>
    <Helmet>
      <title>
        { getTranslatedString(title, selectedLanguage) }
      </title>
    </Helmet>
      <Hero {...university.hero} />
      <div className="px-4 md:px-16 lg:px-36">
        {
          university.sections.map((section, index) => (
            <div key={index} data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'} >
              {/* @ts-ignore */}
              <Section {...section!}  />
            </div>
          ))
        }
      </div>
    </>
  );
}

export default Uni;