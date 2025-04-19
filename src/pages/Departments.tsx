import Section from '../components/common/Section/Section';
import TranslatedText from '../components/common/TranslatedText/TranslatedText';
import departments from '../data/pages/departments';

function Departments() {
  return (
    <div className="px-4">
      <h1 className="text-4xl" data-aos="fade-in">
        <TranslatedText text={departments.title} />
      </h1>
      <p data-aos="fade-in" data-aos-delay="100">
        <TranslatedText text={departments.subtitle} />
      </p>

      {
        departments.sections.map((section, index) => (
         <Section {...section} key={index} data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'} />
        ))
      }
    </div>
  );
}

export default Departments;