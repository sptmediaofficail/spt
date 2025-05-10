'use client';

import { OrderSuccess } from '../../../../../features/orders/order-success';

interface OrderSuccessPageProps {
  params: {
    orderId: string;
  };
}

export default function OrderSuccessPage({ params }: OrderSuccessPageProps) {
  return <OrderSuccess orderId={params.orderId} />;
}
