import Image from 'next/image';
import { Button, Input, Loader, TextArea, Title } from '@/atoms';
import { useTranslation } from '@/hooks';
import { useContactForm } from './hooks';

const Contact = () => {
  const { t } = useTranslation();
  const { form, handleChange, handleSendEmail, isLoading } = useContactForm();

  return (
    <section className="my-20" id="contact">
      <Title text={t('contact')} />
      <div className="flex flex-col w-full p-0 gap-5 items-center lg:flex-row lg:p-5 lg:justify-around">
        <div className="flex flex-col gap-5 w-full xl:w-2/4">
          <h4 className="text-middleBlack dark:text-middleWhite font-openSans">
            {t('contactTitle')}
          </h4>
          <Input
            value={form.name}
            name="name"
            onChange={handleChange}
            placeholder={t('placeholderName')}
          />
          <Input
            value={form.email}
            name="email"
            onChange={handleChange}
            placeholder={t('placeholderEmail')}
          />
          {form.error && (
            <span className="text-red-500 font-openSans text-sm -my-2 ml-1">
              {t('emailInvalid')}
            </span>
          )}
          <TextArea
            name={'message'}
            onChange={handleChange}
            placeholder={t('placeholderMessage')}
            value={form.message}
          />
          <Button onClick={handleSendEmail}>
            <Loader isLoading={isLoading}>
              <span className="font-openSans text-base text-middleWhite hover:text-white">
                {t('sendMessage')}
              </span>
            </Loader>
          </Button>
        </div>
        <div className="w-0 xl:w-1/4 xl:h-50 object-scale-down invisible xl:visible">
          <Image
            alt="contact"
            src="https://res.cloudinary.com/villavicencio/image/upload/v1707095198/jobs/cfjwdrfvdqxpxnkp4lta.png"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
