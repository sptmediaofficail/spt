'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';
import { hyperpayConfig } from '../../../../../config/hyperpay';

interface OrderSuccessPageProps {
  params: {
    orderId: string;
  };
}

export default function OrderSuccessPage({ params }: OrderSuccessPageProps) {
  const [loading, setLoading] = useState(true);
  const [orderDetails, setOrderDetails] = useState<any>(null);
  const searchParams = useSearchParams();
  const requestMadeRef = useRef(false);

  useEffect(() => {
    if (requestMadeRef.current) return;
    requestMadeRef.current = true;

    const fetchOrderDetails = async () => {
      try {
        const resourcePath = searchParams?.get('resourcePath');
        if (resourcePath) {
          // Get payment result from HyperPay
          console.log(resourcePath);
          console.log(hyperpayConfig.accessToken);

          const paymentResponse = await fetch(
            `https://test.oppwa.com${resourcePath}`
          );

          const paymentData = await paymentResponse.json();
          console.log('paymentResponse', paymentData);

          toast.success('Payment successful!');
          if (paymentData.result.code === '000.100.110') {
            // Payment successful, fetch order details
          } else {
            toast.error(paymentData.result.description || 'Payment failed');
            console.log(paymentData.result.description);
          }
        } else {
          // If no resourcePath, just fetch order details
          // const orderResponse = await fetch(`/api/orders/${params.orderId}`);
          // const orderData = await orderResponse.json();
          // setOrderDetails(orderData);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, [params.orderId, searchParams]);

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

        {orderDetails && (
          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-medium">Order Details</h2>
              <p className="text-gray-600">Order ID: {orderDetails.id}</p>
              <p className="text-gray-600">Amount: {orderDetails.amount}</p>
              <p className="text-gray-600">Status: {orderDetails.status}</p>
            </div>

            <div className="border-t pt-4">
              <h2 className="text-lg font-medium">Next Steps</h2>
              <p className="text-gray-600">
                Your order has been successfully placed. You will receive a
                confirmation email shortly.
              </p>
            </div>

            <div className="mt-6">
              <button
                onClick={() => (window.location.href = '/')}
                className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition-colors"
              >
                Return to Home
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
