import { DetailedCard } from '../providers/provider-card';
import { Order } from '@spt/core';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import LocationSvg from '../../assets/location.svg';
import QuantitySvg from '../../assets/quantity.svg';
import CalenderSvg from '../../assets/calender.svg';
import { formatDate } from '../../utils/formatter';

export const OrderCard = (order: Order) => {
  const t = useTranslations();

  return (
    <DetailedCard
      key={order.id}
      href={`/orders/${order.id}`}
      title={t('spare_part_order')}
      description={order.order_no}
      data={[
        {
          label: t('address'),
          value: order.address,
          icon: (
            <Image
              src={LocationSvg}
              alt={'address icon'}
              width={16}
              height={16}
            />
          ),
        },
        {
          label: t('quantity'),
          value: order.quantity,
          icon: (
            <Image
              src={QuantitySvg}
              alt={'quantity icon'}
              width={16}
              height={16}
            />
          ),
        },
        {
          value: formatDate(order.created_at),
          label: t('date'),
          icon: (
            <Image src={CalenderSvg} alt={'date icon'} width={16} height={16} />
          ),
        },
      ]}
    />
  );
};
