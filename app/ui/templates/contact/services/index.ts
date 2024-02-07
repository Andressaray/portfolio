import connect from '@/services';
import { ContactService } from './types';

const sendEmail = async (data: ContactService) => {
  try {
    await connect(data, 'POST', '/email');
  } catch (error: any) {
    throw new Error(error);
  }
};

export { sendEmail };
