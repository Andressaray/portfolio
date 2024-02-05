'use client';

import Image from 'next/image';
import { Title } from '../../atoms';
import { useTranslation } from '../../../lib/hooks';
import jobs from '../../../lib/utils/jobs.json';
import './style.css';

import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import { InView } from 'react-intersection-observer';
import React from 'react';

const Experience = () => {
  const [inView, setInView] = React.useState(false);
  const { t, language } = useTranslation();

  return (
    <section className="my-20" id="experience">
      <Title text={t('experience')} />
      <InView as="div" onChange={(inView, _) => setInView(inView)}>
        <VerticalTimeline lineColor="#53746a" animate={inView} key={language}>
          {jobs[language].map((item, index) => (
            <VerticalTimelineElement
              date={item.date}
              icon={
                <Image
                  src={item.url}
                  className="w-15 h-15 rounded-full"
                  alt={item.business}
                  priority
                  height={200}
                  width={200}
                />
              }
              visible
              key={index}
              className="vertical-timeline-element--work"
            >
              <h3>{item.roll}</h3>
              <h4>{item.business}</h4>
              <p>{item.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </InView>
    </section>
  );
};
export default Experience;
