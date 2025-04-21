import Section from '../components/common/Section/Section';
import TranslatedText from '../components/common/TranslatedText/TranslatedText';
import departments from '../data/pages/departments';
import { Helmet } from 'react-helmet';
import { Translatable } from '../types/types';
import { useLanguage } from '../context/LanguageContext';
import { getTranslatedString } from '../utils/utils';

const title: Translatable = {
  cir: 'Одсеци | Пандора',
  lat: 'Oдсеци | Pandora'
}

function Departments() {
  const { selectedLanguage } = useLanguage();
  return (
    <>
      <Helmet>
        <title>
          { getTranslatedString(title, selectedLanguage) }
        </title>
      </Helmet>
      <div className="px-4 md:px-16 lg:px-36 py-4">
        <h1 className="text-4xl" data-aos="fade-in">
          <TranslatedText text={departments.title} />
        </h1>
        {
          departments.subtitle && (
            <p data-aos="fade-in" data-aos-delay="100">
              <TranslatedText text={departments.subtitle} />
            </p>
          )
        }
        
        {
          departments.departments.map((department, i) => (
            <section className="mt-6 mb-3 py-8" key={i}>
              <h2 className="text-3xl font-bold">
                <TranslatedText text={department.title} />
              </h2>
              {
                department.subtitle && (
                  <p>
                    <TranslatedText text={department.subtitle } />
                  </p>
                )
              }
              {
                department.sections.map((section, index) => (
                  <div key={index} data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'} >
                    <Section {...section}  />
                  </div>
                ))
              }
            </section>
          ))
        }
      </div>
    </>
  );
}

export default Departments;