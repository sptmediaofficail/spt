import axios from 'axios';

interface HyperPayConfig {
  entityId: string;
  accessToken: string;
  testMode: boolean;
}

interface CheckoutResponse {
  id: string;
  redirectUrl: string;
  ndc: string;
}

export class HyperPayService {
  private config: HyperPayConfig;
  private baseUrl: string;
  private widgetUrl: string;

  constructor(config: HyperPayConfig) {
    this.config = config;
    this.baseUrl =
      // config.testMode
      // ?
        'https://eu-test.oppwa.com/v1/checkouts'
      // :
    // 'https://oppwa.com/v1/checkouts';
    this.widgetUrl = config.testMode
      ? 'https://test.oppwa.com/v1/paymentWidgets.js'
      : 'https://oppwa.com/v1/paymentWidgets.js';
  }

  async createCheckout(
    amount: number,
    orderId: string,
    currency = 'SAR'
  ): Promise<CheckoutResponse> {
    try {
      const response = await axios.post(
        this.baseUrl,
        {
          entityId: this.config.entityId,
          amount: amount.toFixed(2),
          currency,
          paymentType: 'DB',
          // entityType: 'ecom',
        },
        {
          headers: {
            Authorization: `Bearer ${this.config.accessToken}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );
      // console.log('response', response);

      if (!response.data || !response.data.id) {
        throw new Error('Invalid response from HyperPay');
      }

      // Extract NDC from the response
      const ndc = response.data.ndc || response.data.id;

      return {
        id: response.data.id,
        redirectUrl: `${this.widgetUrl}?checkoutId=${response.data.id}`,
        ndc,
      };
    } catch (error) {
      console.error('HyperPay checkout creation failed:', error);
      throw error;
    }
  }
}
