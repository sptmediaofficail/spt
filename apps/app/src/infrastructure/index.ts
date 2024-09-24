import { initApi } from './api';

export { envSchema } from './env';

export const initInfrastructure = () => {
  initApi();
};
