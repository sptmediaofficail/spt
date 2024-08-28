import { Partner } from './types';

export class SptClient {
  private baseURL = 'https://api.spt.sa/api/v1';

  async getPartners() {
    const data = await fetch(`${this.baseURL}/landing/partners`, {}).then(
      (response) => response.json()
    );
    return data.data.data as Partner[];
  }
}

export const sptClient = new SptClient();
