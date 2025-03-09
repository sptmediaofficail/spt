import { Offer } from '@spt/core';
import { useEffect, useState } from 'react';
import { useSiteOffersServiceGetSiteOffers } from '../../../../../libs/api-sdk/src/lib/gen2/queries';
import { useSiteOffersServiceGetSiteOffersInfinite } from '../../../../../libs/api-sdk/src/lib/gen2/queries/infiniteQueries';
import { createInfiniteHook } from '../../hooks/create-infinite-hook';

export const usePromotions = () => {
  const [pagination, setPagination] = useState({
    page: 1,
    paginate: 10,
  });

  const props = useSiteOffersServiceGetSiteOffers({
    page: pagination.page,
    paginate: pagination.paginate,
    contentLanguage: 'ar',
  });

  useEffect(() => {
    props.refetch();
  }, [pagination, props.refetch]);

  const offers = props.data?.data?.data || [];

  return {
    ...props,
    offers: offers as Offer[], // casting to Offer[]
    setPagination,
  };
};

export const useOffersInfinity = createInfiniteHook({
  serviceFunction: useSiteOffersServiceGetSiteOffersInfinite,
  queryKey: ['offers.infinite'],
});
