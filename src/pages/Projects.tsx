import { useEffect, useState } from "react";
import TranslatedText from "../components/common/TranslatedText/TranslatedText";
import projects from '../data/pages/projects';
import Card from "../components/common/Project/Card";
import { getTranslatedString } from "../utils/utils";
import { useLanguage } from "../context/LanguageContext";
import { Translatable } from "../types/types";
import { Helmet } from "react-helmet";
import { Flipper, Flipped } from "react-flip-toolkit";
import clsx from "clsx";

const title: Translatable = {
  cir: 'Дан отворених врата ПМФ | Пандора',
  lat: 'Dan otvorenih vrata PMF | Pandora'
}

function Projects() {
  const { selectedLanguage } = useLanguage(); 
  const [categories, setCategories] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<any | null>(null);

  const getUniqueCategories = () => {
    const categoryMap = new Map<number, { cir: string; lat: string }>();
    projects.projects.forEach((project) => {
      if (!categoryMap.has(project.category)) {
        categoryMap.set(project.category, project.subject);
      }
    });
    return Array.from(categoryMap.entries()).map(([id, subject]) => ({
      id,
      name: subject,
    }));
  };

  useEffect(() => {
    setCategories(getUniqueCategories());
  }, []);

  // ✅ Add your filtered logic here
  const filtered = selectedCategory
    ? projects.projects.filter((p) => p.category === selectedCategory.id)
    : projects.projects;

  return (
    <>
      <Helmet>
        <title>
          { getTranslatedString(title, selectedLanguage) }
        </title>
      </Helmet>
      <div className="py-6 px-4">
        <div className="my-12 container mx-auto">
          <h1 className="text-3xl mb-4">
            <TranslatedText text={projects.title} />
          </h1>
          <p dangerouslySetInnerHTML={{ __html: getTranslatedString(projects.subtitle!, selectedLanguage) }} />
        </div>
        <div className="mx-auto flex justify-center flex-wrap gap-4 mb-6">
          <button 
            onClick={() => setSelectedCategory(null)}
            className={clsx(
              'py-2 px-4 border border-gray-200 rounded-xl transition-colors cursor-pointer',
              !selectedCategory && 'bg-gradient-to-r from-blue-500 to-purple-500 font-bold text-white'
            )}
          >
            <TranslatedText text={{ cir: 'Сви пројекти', lat: 'Svi projekti' }} />
          </button>
          {categories.map((category: any, index: number) => (
            <button
              key={index}
              className={clsx(
                'py-2 px-4 border border-gray-200 rounded-xl transition-colors cursor-pointer',
                selectedCategory?.id === category.id && 'bg-gradient-to-r from-blue-500 to-purple-500 font-bold text-white'
              )}
              onClick={() => setSelectedCategory(category)}
            >
              <TranslatedText text={category.name} />
            </button>
          ))}
        </div>

        <Flipper flipKey={selectedCategory?.id ?? "all"} spring="gentle">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container mx-auto gap-5">
            {filtered.map((project) => (
              <Flipped key={project.title.lat} flipId={project.title.lat}>
                <div>
                  <Card {...project} />
                </div>
              </Flipped>
            ))}
          </div>
        </Flipper>
      </div>
    </>
  );
}

export default Projects;
