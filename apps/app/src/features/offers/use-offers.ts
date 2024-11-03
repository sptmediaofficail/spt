import { useSiteOffersServiceGetSiteOffers } from '../../../../../libs/api-sdk/src/lib/gen2/queries';
import { Offer } from '@spt/core';
import { useEffect, useState } from 'react';

export const UseOffers = () => {
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
    (async () => {
      await props.refetch();
    })();
  }, [pagination, props.refetch]);

  // @ts-expect-error - no type
  const offers = props.data?.data?.data as Offer[];

  return {
    ...props,
    offers,
    setPagination,
  };
};
