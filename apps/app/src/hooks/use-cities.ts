import { useCitiesServiceGetCities } from '../../../../libs/api-sdk/src/lib/gen2/queries';

export const UseCities = () => {
  const props = useCitiesServiceGetCities();
  const cities: {
    id: number;
    name_ar: string;
    is_active: boolean;
    // @ts-expect-error - no type
  }[] = props.data?.data?.data ?? [];

  return {
    ...props,
    cities,
  };
};
