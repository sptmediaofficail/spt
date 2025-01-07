export const formatPrice = (price: number | string | undefined) => {
  if (!price) {
    throw new Error('Price is required');
  }

  return new Intl.NumberFormat('ar-SA', {
    style: 'currency',
    currency: 'SAR',
  }).format(Number(price));
};

export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('ar', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
};
