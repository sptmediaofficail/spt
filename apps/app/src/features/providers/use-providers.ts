import { useLandingServiceGetLandingMostRatedProviders } from '../../../../../libs/api-sdk/src/lib/gen2/queries';
import { Provider } from '@spt/core';
import { UseCities } from '../../hooks/use-cities';
import { useLandingServiceGetLandingMostRatedProvidersByTypeInfinite } from '../../../../../libs/api-sdk/src/lib/gen2/queries/infiniteQueries';

export type AdaptedProvider = Provider & { city_name_ar: string };

export const useProviders = () => {
  const { cities, isLoading: citiesLoading } = UseCities();
  const props = useLandingServiceGetLandingMostRatedProviders(
    ['providers'],
    {}
  );

  if (props.isLoading || citiesLoading || props.isError) {
    return {
      ...props,
      providers: {
        spare_part_providers: [],
        junkyard_sale_providers: [],
      },
    };
  }

  // @ts-expect-error - no type
  const rawProviders = props.data?.data ?? {
    spare_part_providers: [],
    junkyard_sale_providers: [],
  };
  const providers: {
    spare_part_providers: AdaptedProvider[];
    junkyard_sale_providers: AdaptedProvider[];
  } = {
    spare_part_providers: rawProviders.spare_part_providers,
    junkyard_sale_providers: rawProviders.junkyard_sale_providers,
  };

  return {
    ...props,
    providers,
  };
};

export const useProvidersInfinity = ({
  type: providerType,
}: {
  type: 'spare_parts' | 'junkyard_sale';
}) => {
  const initialPageSize = 20;
  const subsequentPageSize = 10;

  const props = useLandingServiceGetLandingMostRatedProvidersByTypeInfinite(
    {
      paginate: initialPageSize,
      type: providerType,
      contentLanguage: 'ar',
    },
    [`providers.infinite.${providerType}`],
    {
      getNextPageParam: (lastPage) =>
        lastPage.data.links.next
          ? new URL(lastPage.data.links.next).searchParams.get('page')
          : null,
      initialPageParam: 1,
    }
  );

  const allProviders =
    props.data?.pages.flatMap((page) => page.data?.data) ?? [];

  return {
    ...props,
    providers: allProviders as AdaptedProvider[],
    pageSize:
      allProviders.length > initialPageSize
        ? subsequentPageSize
        : initialPageSize,
  };
};
