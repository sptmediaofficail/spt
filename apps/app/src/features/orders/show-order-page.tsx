import { IOrder } from '@spt/core';
import { useState } from 'react';
import Error from 'next/error';

export const ShowOrderPage = ({ orderId }: { orderId: string }) => {
  const [order, setOrder] = useState<IOrder | null>(null);
  const [isTopRatedLoading, setIsTopRatedLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading || isTopRatedLoading) {
    return 'Loading...';
  }

  if (!order) {
    return <Error statusCode={404} />;
  }

  return <div>asd</div>;
};
