import Error from 'next/error';
import { Progress } from '@heroui/react';
import { useClientClientOrdersServiceGetClientOrdersById } from '../../../../../libs/api-sdk/src/lib/gen2/queries';
import { OrderDetails } from '@spt/core';
import { H1 } from '../../ui/typography';
import { PrimaryDivider } from '../../ui/divider';
import { useTranslations } from 'next-intl';
import {
  FaBox,
  FaCalendar,
  FaCar,
  FaCheckCircle,
  FaHashtag,
  FaMapMarkerAlt,
  FaTruck,
} from 'react-icons/fa';
import { formatDate } from '../../utils/formatter';

export const ShowOrderPage = ({ orderId }: { orderId: string }) => {
  const t = useTranslations();
  const { data, isLoading } = useClientClientOrdersServiceGetClientOrdersById({
    id: orderId,
  });

  if (isLoading) return <Progress value={50} />;
  if (!data) return <Error statusCode={404} title="Order not found" />;

  // @ts-expect-error data is not null
  const orderDetails = data.data as OrderDetails;

  return (
    <div className="w-full p-4 flex flex-col gap-4 h-full">
      <H1>{t('order_spare_part_details')}</H1>
      <PrimaryDivider />
      <div className="flex flex-row gap-4">
        <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border-[7px] border-babyBlue bg-white">
          <span className="text-xs text-center">
            {t('offers_presented', { count: orderDetails.offers.length })}
          </span>
        </div>
        <div className="flex flex-col gap-2 h-fit my-auto">
          <h2 className="text-lg font-semibold text-accent">
            {t('order_spare_part')}
          </h2>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-700">{t('order_spare_part_no')}</span>
            <span className="text-gray-500 font-medium">
              #{orderDetails.order_no}
            </span>
          </div>
        </div>
      </div>
      <OrderDetails orderDetails={orderDetails} />
    </div>
  );
};

const OrderDetails = ({ orderDetails }: { orderDetails: OrderDetails }) => {
  const t = useTranslations();
  const details = [
    {
      label: t('order_spare_part_year'),
      value: orderDetails.details.year,
      icon: FaCalendar,
    },
    {
      label: t('order_spare_part_brand'),
      value: orderDetails.details.brand || t('unknown'),
      icon: FaCar,
    },
    {
      label: t('order_spare_part_model'),
      value: orderDetails.details.model.name || orderDetails.details.model.id,
      icon: FaCar,
    },
    {
      label: t('order_spare_part_location'),
      value: orderDetails.details.address,
      icon: FaMapMarkerAlt,
    },
    {
      label: t('order_spare_part_date'),
      value: formatDate(orderDetails.details.delivery_date),
      icon: FaTruck,
    },
    {
      label: t('order_spare_part_ship'),
      value: orderDetails.details.is_delivery ? t('yes') : t('no'),
      icon: FaTruck,
    },
    {
      label: t('order_spare_part_part_name'),
      value: orderDetails.details.name,
      icon: FaBox,
    },
    {
      label: t('order_spare_part_quantity'),
      value: orderDetails.details.quantity,
      icon: FaHashtag,
    },
    {
      label: t('order_spare_part_status'),
      value: (() => {
        if (
          orderDetails.details.condition_both ||
          (orderDetails.details.condition_new &&
            orderDetails.details.condition_used)
        ) {
          return `${t('order_spare_part_new')} / ${t('order_spare_part_used')}`;
        }
        if (orderDetails.details.condition_new) {
          return t('order_spare_part_new');
        }
        if (orderDetails.details.condition_used) {
          return t('order_spare_part_used');
        }
      })(),
      icon: FaCheckCircle,
    },
  ];

  return (
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
              <span className="text-gray-800 font-medium">{detail.value}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
