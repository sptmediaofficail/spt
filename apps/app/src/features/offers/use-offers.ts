import { useSiteOffersServiceGetSiteOffers } from '../../../../../libs/api-sdk/src/lib/gen2/queries';
import { Offer } from '@spt/core';

export const UseOffers = () => {
  const props = useSiteOffersServiceGetSiteOffers({
    paginate: 10,
    contentLanguage: 'ar',
  });

  // @ts-expect-error - no type
  const offers = props.data?.data?.data as Offer[];

  return {
    ...props,
    offers,
  };
};
