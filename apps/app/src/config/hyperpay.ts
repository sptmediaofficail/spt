export const hyperpayConfig = {
  entityId: process.env.NEXT_PUBLIC_HYPERPAY_ENTITY_ID || '',
  accessToken: process.env.NEXT_PUBLIC_HYPERPAY_ACCESS_TOKEN || '',
  testMode: process.env.NODE_ENV !== 'production',

};
