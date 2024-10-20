import { Card, CardBody, CardHeader } from '@nextui-org/card';
import Image from 'next/image';
import { Truncate } from '@re-dev/react-truncate';
import { Offer } from '@spt/core';
import DiscountSvg from '../../assets/discount.svg';
import { formatPrice } from '../../utils/formatPrice';

export const OfferCard = ({ offer }: { offer: Offer }) => {
  return (
    <Card key={offer.id} className="w-72 shadow-sm">
      <CardHeader className="p-0 rounded-b-none overflow-hidden">
        <Image
          className={'h-44'}
          src={offer.image}
          alt={offer.title}
          width={400}
          height={176}
        />
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
