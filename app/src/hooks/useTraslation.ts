import { useEffect } from 'react';

import languagesStore from '../store/languages';
import es from '../../../public/locales/es.json';
import en from '../../../public/locales/en.json';

const useTranslation = () => {
  const { language, languages, setLanguage } = languagesStore();

  useEffect(() => {
    const value = navigator.language.split('-')[0].toLocaleLowerCase()
    if (value === 'es' || value === 'en') {
      setLanguage(value);
    }
  }, []);
  
  const t = (key: keyof typeof en): string => {
    const translations = {
      en,
      es
    };
    return translations[language][key] ?? '';
  };
  

  return {
    language,
    languages,
    setLanguage,
    t
  };
};

export default useTranslation;
