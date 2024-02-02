'use client';

import { useState } from 'react';
import { useTranslation } from '../../../lib/hooks';
import { ButtonTheme } from '../../atoms';
const Nabvar = () => {
  const { t, setLanguage, language } = useTranslation();
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [hide, setHide] = useState<boolean>(true);

  const routes = [
    {
      name: t('home'),
      path: '#home'
    },
    {
      name: t('services'),
      path: '#services'
    },
    {
      name: t('experience'),
      path: '#experience'
    },
    {
      name: t('contact'),
      path: '#contact'
    }
  ];

  const handleChangeTheme = () => {
    const newTheme = !isDarkMode ? 'dark' : 'light';
    document.documentElement.classList.toggle(newTheme);
    document.documentElement.classList.remove(isDarkMode ? 'dark' : 'light');
    setIsDarkMode(!isDarkMode);
    handleHide();
  };

  const handleChangeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as 'es' | 'en');
    handleHide();
  };

  const handleHide = () => setHide(true);

  return (
    <nav className="border-gray-200">
      <div className="flex flex-wrap items-center justify-end py-1">
        <button
          data-collapse-toggle="navbar-default"
          onClick={() => {
            setHide(!hide);
          }}
          type="button"
          className="lg:hidden inline-flex items-center p-1 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <svg viewBox="0 0 100 80" width="40" height="50" color="#09f">
            <rect width="90" height="15" rx="10"></rect>
            <rect y="30" width="100" height="15" rx="10"></rect>
            <rect y="60" width="80" height="15" rx="10"></rect>
          </svg>
        </button>
        <div
          className={`${hide ? 'hidden' : 'visible'} w-full md:block md:w-auto`}
          id="navbar-de fault"
        >
          <ul className="font-medium flex flex-col p-2 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse">
            <ButtonTheme
              onClick={handleChangeTheme}
              theme={isDarkMode ? 'dark' : 'light'}
            />
            <div className="grid mt-4 md:mt-0">
              <select
                onChange={handleChangeLanguage}
                value={language}
                className="font-openSans bg-transparent dark:text-middleWhite appearance-none row-start-1 col-start-1"
              >
                <option value="en">EN</option>
                <option value="es">ES</option>
              </select>
            </div>
            {routes.map((route, index) => (
              <li key={index} className="py-2">
                <a
                  href={route.path}
                  onClick={handleHide}
                  className="text-move text-base font-openSans cursor-pointer dark:text-middleWhite hover:font-openSansBold"
                  aria-current="page"
                >
                  {route.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Nabvar;
