import { useState } from 'react';
import { errorToast, successToast } from '@toast';
import { sendEmail } from '../services';
import { useTranslation } from '@/hooks';

const useContactForm = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [form, setForm] = useState({
    email: '',
    message: '',
    name: '',
    error: false
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === 'email') {
      const regext = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
      const isError = !regext.test(value);
      setForm({ ...form, [name]: value, error: isError });
      return;
    }
    setForm({ ...form, [name]: value });
  };

  const handleSendEmail = async () => {
    if (form.error || isLoading) {
      return;
    }
    try {
      setIsLoading(true);
      await sendEmail({
        email: form.email,
        message: form.message,
        name: form.name
      });
      successToast(t('successMessage'));
      setForm({
        email: '',
        message: '',
        name: '',
        error: false
      });
    } catch (error) {
      errorToast(t('errorMessage'));
    } finally {
      setIsLoading(false);
    }
  };

  return { form, handleChange, handleSendEmail, isLoading };
};

export default useContactForm;
