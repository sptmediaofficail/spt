import { axiosInstance } from '@kubb/swagger-client/client';
import { envSchema } from './env';

export const initApi = () => {
  axiosInstance.defaults.baseURL = envSchema.NEXT_PUBLIC_API_URL;
  console.log('axiosInstance.defaults.baseURL', envSchema.NEXT_PUBLIC_API_URL);
  axiosInstance.defaults.headers.common['Accept-Language'] = 'ar';
};
