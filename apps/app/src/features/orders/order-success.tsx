import React, { useEffect, useState, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';
import { endpoints } from '../../utils/endpoints';
import axiosInstance from '../../utils/axios';

interface OrderSuccessProps {
  orderId: string;
}

export function OrderSuccess({ orderId }: OrderSuccessProps) {
  const [loading, setLoading] = useState(true);
  const [orderDetails, setOrderDetails] = useState<any>(null);
  const searchParams = useSearchParams();
  const requestMadeRef = useRef(false);

  useEffect(() => {
    if (requestMadeRef.current) return;
    requestMadeRef.current = true;

    paymentHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderId, searchParams]);

  const paymentHandler = async () => {
    try {
      const resourcePath = searchParams?.get('resourcePath');
      if (resourcePath) {
        const paymentResponse = await fetch(
          `https://test.oppwa.com${resourcePath}`
        );
        const paymentData = await paymentResponse.json();

        if (paymentData.result.code === '000.100.110') {
          toast.success('Payment successful!');

          const res = await axiosInstance.post(endpoints.client.orders.pay, {
            order_id: orderId,
            gateway_response: JSON.stringify(paymentData),
          });
          console.log('res', res);

          // Fetch order details after successful payment
          await fetchOrderDetails();
        }
      } else {
        toast.error('Payment failed');
      }
    } catch (error) {
      console.log(error);
      toast.error(error as string);
    } finally {
      setLoading(false);
    }
  };

  const fetchOrderDetails = async () => {
    try {
      const res = await axiosInstance.get(
        `${endpoints.client.orders}/${orderId}`
      );
      console.log('res', res);
      setOrderDetails(res.data);
    } catch (error) {
      console.error('Error fetching order details:', error);
      toast.error('Failed to fetch order details');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">
            Loading order details...
          </h1>
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-semibold text-green-600 mb-6">
          Order Successful!
        </h1>
      </div>
    </div>
  );
}
