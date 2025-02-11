'use client';
import { useParams } from 'next/navigation';
import { ShowOrderPage } from '../../../../features/orders/show-order-page';

export default function Page() {
  const { orderId } = useParams() as { orderId: string };

  if (!orderId) {
    return null;
  }

  return <ShowOrderPage orderId={orderId} />;
}
