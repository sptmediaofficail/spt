import { useLandingServiceGetLandingMostRatedProviders } from '../../../../../libs/api-sdk/src/lib/gen2/queries';
import { Provider } from '@spt/core';
import { UseCities } from '../../hooks/use-cities';

type AdaptedProvider = Provider & { city_name_ar: string };

export const UseProviders = () => {
  const { cities, isLoading: citiesLoading } = UseCities();
  const props = useLandingServiceGetLandingMostRatedProviders(
    ['providers'],
    {}
  );

  if (props.isLoading || citiesLoading) {
    return {
      ...props,
      providers: {
        spare_part_providers: [],
        junkyard_sale_providers: [],
      },
    };
  }

  const rawProviders = props.data?.data;

  const cityAdapter = (record: { city_id: string }) => {
    const city_id = parseInt(record.city_id);
    const city = cities.find((city) => city.id === city_id);
    return {
      ...record,
      city_name_ar: city?.name_ar ?? 'مدينة غير معروفة',
    };
  };

  const providers: {
    spare_part_providers: AdaptedProvider[];
    junkyard_sale_providers: AdaptedProvider[];
  } = {
    spare_part_providers: rawProviders.spare_part_providers.map(cityAdapter),
    junkyard_sale_providers:
      rawProviders.junkyard_sale_providers.map(cityAdapter),
  };

  return {
    ...props,
    providers,
  };
};
