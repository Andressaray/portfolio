'use client';

import { Chrono } from 'react-chrono';
import { Title } from '../../atoms';
import { useTranslation } from '../../../lib/hooks';
import jobs from '../../../lib/utils/jobs.json';
import './style.css';

const Experience = () => {
  const { t, language } = useTranslation();

  const ComponentChrono = () => {
    if (typeof window !== 'undefined') {
      return (
        <Chrono
          key={language}
          items={jobs[language]}
          mode="VERTICAL_ALTERNATING"
          slideShow
          slideItemDuration={4500}
          slideShowType="reveal"
          theme={{
            primary: '#53746a',
            secondary: 'bg-white dark:bg-primaryDark',
            cardBgColor: 'bg-white dark:bg-primaryDark',
            titleColor: 'black',
            titleColorActive: '#394950'
          }}
        />
      );
    }
    return null;
  };

  return (
    <section className="my-20" id="experience">
      <Title text={t('experience')} />
      <ComponentChrono />
    </section>
  );
};
export default Experience;
