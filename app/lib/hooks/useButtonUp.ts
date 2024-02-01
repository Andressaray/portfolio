import { useState, useEffect } from 'react';

const useButtonUp = () => {
  const [buttonUp, setButtonUp] = useState<boolean>(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        if (window.scrollY > 300) {
          setButtonUp(true);
        } else {
          setButtonUp(false);
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return { buttonUp, handleScrollToTop };
};

export default useButtonUp;
