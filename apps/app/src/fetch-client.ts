import createClient, { ClientOptions } from 'openapi-fetch';
import { paths } from '@spt/api-sdk';
import { envSchema } from './env';

export const FetchClientConfig: ClientOptions = {
  baseUrl: envSchema.NEXT_PUBLIC_API_URL,
};

export const fetchClient = createClient<paths>(FetchClientConfig);
