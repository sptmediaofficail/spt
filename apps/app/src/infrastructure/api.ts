import { OpenAPI } from '../../../../libs/api-sdk/src/lib/gen2/requests';

export const initApi = () => {
  OpenAPI.BASE = 'https://api.spt.sa/api/v1';
};
