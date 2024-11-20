import { useLandingServiceGetLandingMostRatedProviders } from '../../../../../libs/api-sdk/src/lib/gen2/queries';
import { Provider } from '@spt/core';
import { UseCities } from '../../hooks/use-cities';
import { useLandingServiceGetLandingMostRatedProvidersByTypeInfinite } from '../../../../../libs/api-sdk/src/lib/gen2/queries/infiniteQueries';
import { createInfiniteHook } from '../../hooks/create-infinite-hook';
import { fetchClient } from '../../fetch-client';
import { IProvider } from './types';

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
}) =>
  createInfiniteHook({
    serviceFunction:
      useLandingServiceGetLandingMostRatedProvidersByTypeInfinite,
    queryKey: [`providers.infinite.${providerType}`],
    additionalParams: { type: providerType, contentLanguage: 'ar' },
  })();

export const getProviderData = async (id: string) => {
  const { data } = (await fetchClient.GET('/provider/{id}', {
    params: {
      path: { id },
    },
  })) as { data: { data: IProvider } };
  return data?.data;
};
