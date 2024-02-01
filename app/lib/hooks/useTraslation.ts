'use client';
import { useEffect } from 'react';

import languagesStore from '../store/languages';
import es from '../locales/es.json';
import en from '../locales/en.json';

const useTranslation = () => {
  const { language, languages, setLanguage } = languagesStore();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const value = navigator.language.split('-')[0].toLocaleLowerCase();
      if (value === 'es' || value === 'en') {
        setLanguage(value);
      }
    }
  }, [setLanguage]);

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
