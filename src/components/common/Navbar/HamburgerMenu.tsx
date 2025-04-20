import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import navbar from "../../../data/nav/navbar";
import { RiCloseLargeFill, RiMenuLine } from "@remixicon/react";
import TranslatedText from "../TranslatedText/TranslatedText";
import clsx from "clsx";
import { useScrollLock } from "../../../hooks/useScrollLock";

function HamburgerMenu() {
  const location = useLocation();
  const [ isOpen, setIsOpen ] = useState<boolean>(false);

  useScrollLock(isOpen);

  useEffect(() => {
    setIsOpen(false);
  }, [ location ]);

  return (
    <>
    {
      isOpen && (
        <div 
          className="w-[100vw] h-[100vh] absolute z-[9998] top-0 left-0 bg-black opacity-50 overflow-none"
          onClick={() => setIsOpen(false)} 
        />
      )
    }
      <nav className={clsx(
        "absolute flex flex-col bg-white w-[90vw] h-[calc(100vh-48px)] top-[48px] md:w-[60vw] z-[9999] overflow-none transform transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        {
          navbar.links.map((link, index) => (
            <Link 
              to={link.url}
              key={index}
              className={clsx('py-2 px-2',location.pathname === link.url && 'text-red-500 font-bold bg-gray-100')}
            >
              <TranslatedText text={link.label} />
            </Link>
          ))
        }
      </nav>

      <div className="relative z-[9999] flex flex-1 items-center justify-between px-4 bg-white">
        <img className="w-12 h-12" src="/pmf.png" />
        {
          isOpen 
            ? <RiCloseLargeFill onClick={() => setIsOpen(false)} />
            : <RiMenuLine onClick={() => setIsOpen(true)} />
        }
        
      </div>
    </>
  );
}

export default HamburgerMenu;