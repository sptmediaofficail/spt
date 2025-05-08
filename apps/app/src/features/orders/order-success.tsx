import React, { useEffect, useState, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';
import { endpoints } from '../../utils/endpoints';
import axiosInstance from '../../utils/axios';
import { useTranslations } from 'next-intl';
import {
  FaBox,
  FaCalendar,
  FaCar,
  FaCheckCircle,
  FaHashtag,
  FaMapMarkerAlt,
  FaTruck,
  FaStore,
} from 'react-icons/fa';
import { formatDate } from '../../utils/formatter';
import { H1 } from '../../ui/typography';
import { PrimaryDivider } from '../../ui/divider';
import Image from 'next/image';
import leaf from '../../assets/leaf.svg';

interface OrderSuccessProps {
  orderId: string;
}

export function OrderSuccess({ orderId }: OrderSuccessProps) {
  const t = useTranslations();
  const [loading, setLoading] = useState(true);
  const [orderDetails, setOrderDetails] = useState<any>(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  const requestMadeRef = useRef(false);

  useEffect(() => {
    if (requestMadeRef.current) return;
    requestMadeRef.current = true;

    fetchOrderDetails();
    setTimeout(() => {
      router.push(`/orders/${orderId}`);
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderId]);

  const fetchOrderDetails = async () => {
    try {
      const res = await axiosInstance.get(
        `${endpoints.client.orders.details}/${orderId}`
      );
      console.log('res', res);
      setOrderDetails(res.data);

      // Only execute payment if order is not paid
      if (!res.data.is_paid) {
        paymentHandler();
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.error('Error fetching order details:', error);
      toast.error('Failed to fetch order details');
      setLoading(false);
    }
  };

  const paymentHandler = async () => {
    try {
      const resourcePath = searchParams?.get('resourcePath');
      if (resourcePath) {
        const paymentResponse = await fetch(
          `https://test.oppwa.com${resourcePath}`
        );
        const paymentData = await paymentResponse.json();

        if (paymentData.result.code === '000.100.110') {
          toast.success(t('success'));

          const res = await axiosInstance.post(endpoints.client.orders.pay, {
            order_id: orderId,
            gateway_response: JSON.stringify(paymentData),
          });
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

  if (!orderDetails) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-red-600">
            Order not found
          </h1>
        </div>
      </div>
    );
  }

  const acceptedOffer = orderDetails.offers?.find(
    (offer: any) => offer.status === 'ACCEPTED'
  );

  const details = [
    {
      label: t('order_spare_part_year'),
      value: orderDetails.details?.year,
      icon: FaCalendar,
    },
    {
      label: t('order_spare_part_brand'),
      value: orderDetails.details?.brand?.name || t('unknown'),
      icon: FaCar,
    },
    {
      label: t('order_spare_part_model'),
      value:
        orderDetails.details?.model?.name ||
        orderDetails.details?.model?.id ||
        t('unknown'),
      icon: FaCar,
    },
    {
      label: t('order_spare_part_location'),
      value: orderDetails.details?.address,
      icon: FaMapMarkerAlt,
    },
    {
      label: t('order_spare_part_date'),
      value: formatDate(orderDetails.details?.delivery_date),
      icon: FaTruck,
    },
    {
      label: t('order_spare_part_ship'),
      value: orderDetails.details?.is_delivery ? t('yes') : t('no'),
      icon: FaTruck,
    },
    {
      label: t('part_name'),
      value: orderDetails.details?.name,
      icon: FaBox,
    },
    {
      label: t('order_spare_part_quantity'),
      value: orderDetails.details?.quantity,
      icon: FaHashtag,
    },
    {
      label: t('order_spare_part_status'),
      value: (() => {
        if (
          orderDetails.details?.condition_both ||
          (orderDetails.details?.condition_new &&
            orderDetails.details?.condition_used)
        ) {
          return `${t('order_spare_part_new')} / ${t('order_spare_part_used')}`;
        }
        if (orderDetails.details?.condition_new) {
          return t('order_spare_part_new');
        }
        if (orderDetails.details?.condition_used) {
          return t('order_spare_part_used');
        }
        return t('unknown');
      })(),
      icon: FaCheckCircle,
    },
  ];

  return (
    <div className="w-full p-4 flex flex-col gap-4 h-full">
      <div className="flex flex-row gap-4">
        <h2 className="text-xl font-semibold text-primary">
          {t('order_spare_part_details')}
        </h2>
      </div>
      <PrimaryDivider />

      {acceptedOffer && (
        <div className="border border-gray-200 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-2">
              <Image
                src={acceptedOffer?.avatar || leaf}
                alt="leaf"
                width={100}
                height={100}
                className="rounded-full"
              />
            </div>
            <div>
              <div>
                <span className="text-[18px] font-semibold text-accent">
                  {acceptedOffer?.name || t('unknown')}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-700">
                  {t('order_spare_part_no')}
                </span>
                <span className="text-gray-500 font-medium">
                  #{orderDetails.order_no}
                </span>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center p-2  rounded-full">
                <FaMapMarkerAlt className=" w-5 h-5 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-500">
                  {t('store_address')}
                </span>
                <span className="text-gray-800 font-medium">
                  {acceptedOffer?.address || t('unknown')}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
      <PrimaryDivider />
      <div className="flex flex-col gap-4">
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-y-4">
          {details.map((detail, index) => {
            return (
              <div
                key={detail.label}
                className={`
                  flex items-center gap-4 p-4 border-spacing-y-[21px]
                  ${index >= 2 ? 'lg:border-0 border-gray-100 border-t' : ''}
                  ${index >= 3 ? 'border-gray-100 lg:border-t' : ''}
                  border-gray-200
                `}
              >
                <div className="flex items-center justify-center p-2 bg-babyBlue rounded-full">
                  {<detail.icon className="text-primary w-5 h-5" />}
                </div>

                <div className="flex flex-col">
                  <span className="text-sm text-gray-500">{detail.label}</span>
                  <span className="text-gray-800 font-medium">
                    {detail.value}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
