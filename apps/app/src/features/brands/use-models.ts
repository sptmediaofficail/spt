import { createInfiniteHook } from '../../hooks/create-infinite-hook';
import { useBrandModelsServiceGetBrandsByBrandIdModelsInfinite } from '../../../../../libs/api-sdk/src/lib/gen2/queries/infiniteQueries';

export type Model = {
  id: string;
  name: string;
};

// export const useModels = () => {
//   const props = useBrandModelServ({
//     page: 1,
//     paginate: 10,
//   });
//   const models = props.data?.data?.data as Model[];
//
//   if (props.isLoading || props.isError) {
//     return {
//       ...props,
//       models: [],
//     };
//   }
//
//   return {
//     ...props,
//     models,
//   };
// };

export const useModelsInfinity = ({ brandId }: { brandId: string }) =>
  createInfiniteHook({
    serviceFunction: useBrandModelsServiceGetBrandsByBrandIdModelsInfinite,
    queryKey: [`models.infinite.${brandId}`],
    additionalParams: { brandId },
  });
