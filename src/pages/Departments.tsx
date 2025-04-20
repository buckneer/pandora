import React from 'react';
import Section from '../components/common/Section/Section';
import TranslatedText from '../components/common/TranslatedText/TranslatedText';
import departments from '../data/pages/departments';

function Departments() {
  return (
    <div className="px-4 py-4">
      <h1 className="text-4xl" data-aos="fade-in">
        <TranslatedText text={departments.title} />
      </h1>
      <p data-aos="fade-in" data-aos-delay="100">
        <TranslatedText text={departments.subtitle} />
      </p>

      {
        departments.departments.map((department, i) => (
          <section className="mt-6 mb-3" key={i}>
            <h2 className="text-3xl">
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
  );
}

export default Departments;