import { Partner, Stats } from './types';

export class SptClient {
  private baseURL = 'https://api.spt.sa/api/v1';

  async fetch(url: string, options: RequestInit = {}) {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    // we used clone to consume the response, to avoid websocket error
    // https://stackoverflow.com/questions/76931498/typeerror-terminated-cause-socketerror-other-side-closed-in-fetch-nodejs
    return response.clone().json();
  }

  async getPartners() {
    const url = `${this.baseURL}/landing/partners`;
    const response = await this.fetch(url);
    return response.data.data as Partner[];
  }

  async getStats() {
    const url = `${this.baseURL}/landing/orders_numbers`;
    const response = await this.fetch(url);
    return response.data as Stats;
  }
}

export const sptClient = new SptClient();
