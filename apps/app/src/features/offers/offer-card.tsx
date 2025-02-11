import { Card, CardBody, CardHeader, CardProps } from "@heroui/card";
import Image from 'next/image';
import { Truncate } from '@re-dev/react-truncate';
import { Offer } from '@spt/core';
import DiscountSvg from '../../assets/discount.svg';
import { formatPrice } from '../../utils/formatter';
import { useTranslations } from 'next-intl';
import { Skeleton } from "@heroui/skeleton";
import { cn } from "@heroui/theme";

export const OfferCard = (props: CardProps & { offer: Offer }) => {
  const { offer } = props;
  const t = useTranslations('common');
  const discount = Math.floor(
    ((parseInt(offer.price_before_discount) -
      parseInt(offer.price_after_discount)) /
      parseInt(offer.price_before_discount)) *
      100
  );
  return (
    <Card
      key={offer.id}
      isHoverable
      className={cn(
        'w-72 shadow-sm border cursor-pointer transition-transform ease-in h-fit'
        // 'xl:w-80'
      )}
      {...props}
    >
      <CardHeader className="p-0 rounded-b-none overflow-hidden">
        <Image
          className={'h-44 bg-transparent'}
          src={offer.image}
          alt={offer.title}
          width={400}
          height={176}
        />
        <div className="absolute font-semibold top-0 left-0 text-sm bg-[#cd292a] text-white p-2 rounded-br">
          <p>{t('discount') + ' ' + discount}%</p>
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
    <Card className="w-72 shadow-sm border h-fit">
      <CardHeader className="p-0 animate-pulse bg-gray-300 rounded-b-none overflow-hidden relative">
        <Skeleton className="h-44" />
      </CardHeader>
      <CardBody className="flex flex-col gap-4 text-right">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-1/2" />
      </CardBody>
    </Card>
  );
};
