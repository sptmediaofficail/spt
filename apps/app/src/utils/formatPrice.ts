export const formatPrice = (price: number | string | undefined) => {
  if (!price) {
    throw new Error('Price is required');
  }

  return new Intl.NumberFormat('ar-SA', {
    style: 'currency',
    currency: 'SAR',
  }).format(Number(price));
};
