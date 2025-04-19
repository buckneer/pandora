import { useEffect } from "react";

export const useScrollLock = (lock: boolean) => {
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (lock) {
      // Calculate scrollbar width dynamically
    //   const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    //   html.style.setProperty('--scrollbar-width', `${scrollbarWidth ?? 0}px`);
      body.classList.add('overflow-hidden');
      html.classList.add('overflow-hidden');
    } else {
      body.classList.remove('overflow-hidden');
      html.classList.remove('overflow-hidden');
    //   html.style.setProperty('--scrollbar-width', '0px'); // Reset
    }

    return () => {
      body.classList.remove('overflow-hidden');
      html.classList.remove('overflow-hidden');
    //   html.style.setProperty('--scrollbar-width', '0px');
    };
  }, [lock]);
};