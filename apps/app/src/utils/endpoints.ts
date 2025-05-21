export const endpoints = {
  client: {
    orders: {
      pay: `/client/orders/pay`,
      details: `/client/orders`,
      acceptOffer: (offerId: string) => `/client/offer/${offerId}/accept`,
      confirmDelivery: (orderId: string) =>
        `/client/orders/${orderId}/confirm-delivery`,
      cancel: `/client/orders/cancel`,
    },
  },
  provider: {
    orders: {
      confirmDelivery: (orderId: string) =>
        `/provider/orders/${orderId}/confirm-delivery`,
    },
  },
};
