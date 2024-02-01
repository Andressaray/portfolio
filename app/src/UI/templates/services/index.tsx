import { Card } from '@/molecules';
import { useTranslation } from '@/hooks';
import { Title } from '@/atoms';
import services from '~/utils/services.json';

const Services = () => {
  const { t, language } = useTranslation();

  return (
    <section id="services" className="my-20">
      <Title text={t('services')} />
      <div className="flex flex-wrap items-center gap-4 justify-between">
        {services[language].map((service) => (
          <Card
            key={service.id}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        ))}
      </div>
    </section>
  );
};
export default Services;
