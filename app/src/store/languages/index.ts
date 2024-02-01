import { create } from 'zustand';

interface ITranslations {
  language: 'en' | 'es';
  languages: string[];
  setLanguage: (language: 'en' | 'es') => void;
}

const traslations = create<ITranslations>((set) => ({
  language: 'es',
  languages: ['en', 'es'],
  setLanguage: (language: 'en' | 'es') => set({ language })
}));
export default traslations;
