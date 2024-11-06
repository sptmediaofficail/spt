import { Offer } from '@spt/core';
import { useEffect, useState } from 'react';
import { useSiteOffersServiceGetSiteOffers } from '../../../../../libs/api-sdk/src/lib/gen2/queries';
import { useSiteOffersServiceGetSiteOffersInfinite } from '../../../../../libs/api-sdk/src/lib/gen2/queries/infiniteQueries';

interface Pagination {
  page: number;
  paginate: number;
}

export const useOffers = () => {
  const [pagination, setPagination] = useState<Pagination>({
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

export const useOffersInfinity = () => {
  const initialPageSize = 20;
  const subsequentPageSize = 10;

  const props = useSiteOffersServiceGetSiteOffersInfinite(
    {
      paginate: initialPageSize,
      contentLanguage: 'ar',
    },
    ['offers.infinite'],
    {
      getNextPageParam: (lastPage) =>
        lastPage.data.links.next
          ? new URL(lastPage.data.links.next).searchParams.get('page')
          : null,
      initialPageParam: 1,
    }
  );

  const allOffers = props.data?.pages.flatMap((page) => page.data?.data) || [];

  return {
    ...props,
    offers: allOffers as Offer[], // casting to Offer[]
    pageSize:
      allOffers.length > initialPageSize ? subsequentPageSize : initialPageSize,
  };
};
