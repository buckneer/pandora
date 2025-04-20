import { useEffect, useState } from "react";
import TranslatedText from "../components/common/TranslatedText/TranslatedText";
import projects from '../data/pages/projects';

function Projects() {
  const [ selectedCategory, setSelectedCategory ] = useState<number | null>(null);

  // TODO: Implement something like this (using query params)

  // useEffect(() => {
  //   const category = searchParams.get('category');

  //   setSelectedCategory(
  //     (!category || category === 'all') 
  //       ? null
  //       : parseInt(category)
  //   );
  // }, [ searchParams ]);

  return (
    <div className="py-6 px-4">
      <h1 className="text-3xl">
        <TranslatedText text={projects.title} />
      </h1>
      <p>
        <TranslatedText text={projects.subtitle} />
      </p>
      
    </div>
  );
}

export default Projects;