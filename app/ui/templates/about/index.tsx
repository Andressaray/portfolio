import React from 'react';
import Image from 'next/image';
import { useTranslation } from '../../../lib/hooks';

const About = () => {
  const { t } = useTranslation();
  const refAboutMe = React.useRef(null);

  return (
    <section id="home" className="py-5">
      <article className="flex flex-col items-center gap-2 lg:flex-row">
        <div className="mb-5 flex flex-col gap-5 sm:items-start">
          <h3 className="text-2xl font-openSansBold dark:text-white animate__animated animate__bounceInLeft">
            {t('iam')}
          </h3>
          <div className="w-max">
            <h1 className="text-primary h-14 font-openSansBold whitespace-nowrap border-r-4 border-r-white dark:border-r-bgDark pr-5 text-5xl animate__animated animate__bounceInLeft">
              Andres Saray
            </h1>
          </div>
          <div
            className="typewriter text-xl mb-2 font-openSans sm:w-2/3"
            ref={refAboutMe}
            id="aboutMe"
          >
            <p className="animate__animated animate__bounceInLeft font-openSans text-lg tracking-wider dark:text-middleWhite">
              {t('aboutMe')}
            </p>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <Image
            alt="me"
            className="animate__animated animate__fadeIn h-[350px] w-[350px] object-cover"
            width={200}
            height={200}
            src={
              '/images/me_bg_g.svg'
              // 'https://res.cloudinary.com/villavicencio/image/upload/v1706721732/jobs/vlffwtq17sgvibbubmtq.png'
            }
          />
        </div>
      </article>
    </section>
  );
};
export default About;
