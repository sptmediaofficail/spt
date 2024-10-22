import { Card, CardBody, CardHeader } from '@nextui-org/card';
import Image from 'next/image';
import { Truncate } from '@re-dev/react-truncate';
import { Offer } from '@spt/core';
import DiscountSvg from '../../assets/discount.svg';
import { formatPrice } from '../../utils/formatPrice';
import { useTranslations } from 'next-intl';
import { Skeleton } from '@nextui-org/skeleton';

export const OfferCard = ({ offer }: { offer: Offer }) => {
  const t = useTranslations();
  const discount = Math.floor(
    ((parseInt(offer.price_before_discount) -
      parseInt(offer.price_after_discount)) /
      parseInt(offer.price_before_discount)) *
      100
  );
  return (
    <Card key={offer.id} className="w-80 shadow-sm">
      <CardHeader className="p-0 rounded-b-none overflow-hidden">
        <Image
          className={'h-44'}
          src={offer.image}
          alt={offer.title}
          width={400}
          height={176}
        />
        <div className="absolute font-semibold top-0 left-0 text-sm bg-[#cd292a] text-white p-2 rounded-br">
          <p>{t('common.discount') + ' ' + discount}%</p>
        </div>
      </CardHeader>
      <CardBody className="flex flex-col gap-4 text-right">
        <h2 className={'text-xl'}>{offer.title}</h2>
        <p className={'text-sm text-gray-500'}>
          <Truncate lines={2} ellipsis={<span>...</span>}>
            {offer.description}
          </Truncate>
        </p>
        <div className={'flex gap-2 text-xs'}>
          <Image src={DiscountSvg} alt="discount" width={16} height={16} />
          <p className="line-through text-gray-500">
            {formatPrice(offer.price_before_discount)}
          </p>
          <p className={'text-primary'}>
            {formatPrice(offer.price_after_discount)}
          </p>
        </div>
      </CardBody>
    </Card>
  );
};

export const OfferCardSkeleton = () => {
  return (
    <Card className="w-80 shadow-sm">
      <CardHeader className="p-0 animate-pulse bg-gray-300 rounded-b-none overflow-hidden relative">
        <Skeleton className="h-44" />
      </CardHeader>
      <CardBody className="flex flex-col gap-4 text-right">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-1/2" />
      </CardBody>
    </Card>
  );
};
