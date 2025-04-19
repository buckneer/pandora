import "aos/dist/aos.css";
import { useEffect } from 'react';

export default function AOSInit() {
  useEffect(() => {
    import('aos').then((AOS) =>
      AOS.init({
        once: true,
      })
    );
  }, []);

  return <></>;
}