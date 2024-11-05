import { Offer } from '@spt/core';
import { useEffect, useState } from 'react';
import { useAdminLandingSiteOfferServiceGetAdminSiteOffersInfinite } from '../../../../../libs/api-sdk/src/lib/gen2/queries/infiniteQueries';
import { useSiteOffersServiceGetSiteOffers } from '../../../../../libs/api-sdk/src/lib/gen2/queries';

export const UseOffers = () => {
  const [pagination, setPagination] = useState({
    page: 1,
    paginate: 10,
  });
  //
  const props = useSiteOffersServiceGetSiteOffers({
    page: pagination.page,
    paginate: pagination.paginate,
    contentLanguage: 'ar',
  });

  const props2 = useAdminLandingSiteOfferServiceGetAdminSiteOffersInfinite({
    paginate: 10,
    page: 1,
  });

  useEffect(() => {
    (async () => {
      await props.refetch();
    })();
  }, [pagination, props.refetch]);

  console.log(props.data);
  // @ts-expect-error - no type
  const offers = props.data?.data?.data as Offer[];

  return {
    ...props,
    offers,
    setPagination,
  };
};
