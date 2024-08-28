import { Offer, Partner, Stats, TopRated } from './types';

export class SptClient {
  private baseURL = 'https://api.spt.sa/api/v1';

  async fetch(
    url: string,
    options: RequestInit = {
      headers: {
        'Accept-Language': 'ar',
      },
    }
  ) {
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

  async topRated() {
    const url = `${this.baseURL}/landing/most_rated_providers`;
    const response = await this.fetch(url);
    return response.data as TopRated;
  }

  async getOffers() {
    const url = `${this.baseURL}/landing/site_offers`;
    const response = await this.fetch(url);
    return response.data.data as Offer[];
  }
}

export const sptClient = new SptClient();
