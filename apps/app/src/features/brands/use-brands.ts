import { createInfiniteHook } from '../../hooks/create-infinite-hook';
import { useBrandServiceGetBrands } from '../../../../../libs/api-sdk/src/lib/gen2/queries';
import { useBrandServiceGetBrandsInfinite } from '../../../../../libs/api-sdk/src/lib/gen2/queries/infiniteQueries';

export type Brand = {
  id: string;
  name: string;
  logo: string;
};

export const useBrands = () => {
  const props = useBrandServiceGetBrands({
    page: 1,
    paginate: 10,
  });
  const brands = props.data?.data?.data as Brand[];

  if (props.isLoading || props.isError) {
    return {
      ...props,
      brands: [],
    };
  }

  return {
    ...props,
    brands,
  };
};

export const useBrandsInfinity = createInfiniteHook({
  serviceFunction: useBrandServiceGetBrandsInfinite,
  queryKey: ['brands.infinite'],
});
