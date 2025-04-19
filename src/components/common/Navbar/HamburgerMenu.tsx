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
          <>
            <div 
              className="w-[100vw] h-[100vh] absolute z-1 top-0 left-0 bg-black opacity-50 overflow-none"
              onClick={() => setIsOpen(false)} 
            />
            <nav className="absolute flex flex-col bg-white w-[90vw] h-[calc(100vh-48px)] top-[48px] md:w-[60vw] z-10 overflow-none">
              {
                navbar.links.map((link, index) => (
                  <Link 
                    to={link.url}
                    key={index}
                    className={clsx('py-2 px-2',location.pathname === link.url && 'font-bold')}
                  >
                    <TranslatedText text={link.label} />
                  </Link>
                ))
              }
            </nav>
          </>
        )
      }
      <div className="relative z-10 flex flex-1 items-center justify-between px-4 bg-white">
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