import { Link, useLocation } from "react-router-dom";
import navbar from "../../../data/nav/navbar";
import TranslatedText from "../TranslatedText/TranslatedText";
import clsx from "clsx";
import { useLanguage } from "../../../context/LanguageContext";
import { Language } from "../../../types/types";

function RegularMenu() {
  const location = useLocation();

  const { selectedLanguage, setSelectedLanguage } = useLanguage();

  const handleLanguageChange = (value: Language) => {
    setSelectedLanguage(value);
  }

  return (
    <nav className="flex items-center justify-between w-full px-8 py-4 bottom-shadow">
      <div className="w-[240px]">
        <img className="w-16 h-16" src="/pmf.png" />
      </div>

      <div className="flex flex-1 justify-center gap-6">
        {
          navbar.links.map((link, index) => (
            <Link to={link.url} key={index} className={clsx('hover:text-red-500 transition-colors', location.pathname === link.url && 'font-bold text-red-500')}>
              <TranslatedText text={link.label} />
            </Link>
          ))
        }
      </div>
      <div className="flex gap-6 w-[240px]">
        {
          navbar.socials.map(({ icon: Icon, url }, index) => (
            <a className="text-gray-600 hover:text-black transition-colors" href={url} target="_blank" key={index}>
              <Icon className="w-6 h-6"  />
            </a>
          ))
        }
        <select value={selectedLanguage} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleLanguageChange(e.target.value as Language)}>
          <option value='cir'>Ћирилица</option>
          <option value='lat'>Latinica</option>
        </select>
      </div>
    </nav>
  );
}

export default RegularMenu;