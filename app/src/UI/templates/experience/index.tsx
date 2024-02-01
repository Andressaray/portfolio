import { Chrono } from 'react-chrono';
import { Title } from '@/atoms';
import { useTranslation } from '@/hooks';
import jobs from '~/utils/jobs.json';
import './style.css';

const Experience = () => {
  const { t, language } = useTranslation();

  return (
    <section className="my-20" id="experience">
      <Title text={t('experience')} />
      <Chrono
        key={language}
        items={jobs[language]}
        mode="VERTICAL_ALTERNATING"
        slideShow
        slideItemDuration={4500}
        slideShowType="reveal"
        theme={{
          primary: '#53746a',
          secondary: '#fff',
          cardBgColor: '#fff',
          titleColor: 'black',
          titleColorActive: '#394950'
        }}
      />
    </section>
  );
};
export default Experience;
