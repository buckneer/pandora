import Section from '../components/common/Section/Section';
import TranslatedText from '../components/common/TranslatedText/TranslatedText';
import departments from '../data/pages/departments';

function Departments() {
  return (
    <div className="px-4">
      <h1 className="text-4xl">
        <TranslatedText text={departments.title} />
      </h1>
      <p>
        <TranslatedText text={departments.subtitle} />
      </p>

      {
        departments.sections.map((section, index) => (
         <Section {...section} key={index} />
        ))
      }
    </div>
  );
}

export default Departments;