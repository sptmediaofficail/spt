import { IOffer, OrderDetails } from '@spt/core';
import { OfferCard } from './offer-card';

export const OrderOffersSection = (props: OrderDetails) => {
  return (
    <div className="grid grid-cols- gap-4">
      {props.offers.map((offer: IOffer) => (
        <OfferCard key={offer.id} {...offer} />
      ))}
    </div>
  );
};
