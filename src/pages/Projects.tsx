import { useEffect, useState } from "react";
import TranslatedText from "../components/common/TranslatedText/TranslatedText";
import projects from '../data/pages/projects';
import Card from "../components/common/Project/Card";

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
      <div className="my-12 container mx-auto">
        <h1 className="text-3xl m">
          <TranslatedText text={projects.title} />
        </h1>
        <p>
          <TranslatedText text={projects.subtitle} />
        </p>
      </div>
      <div className="grid grid-cols-4 container mx-auto gap-5">
        {
          projects.projects.map((project, index) => (
            <Card {...project} key={index} />
          ))
        }
      </div>
      
    </div>
  );
}

export default Projects;