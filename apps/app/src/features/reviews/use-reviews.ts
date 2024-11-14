import { usePlatformReviewsServiceGetPlatformReviews } from '../../../../../libs/api-sdk/src/lib/gen2/queries';
import { usePlatformReviewsServiceGetPlatformReviewsInfinite } from '../../../../../libs/api-sdk/src/lib/gen2/queries/infiniteQueries';
import { createInfiniteHook } from '../../hooks/create-infinite-hook';

type Review = {
  id: string;
  name: string;
  comment: string;
  avatar: string;
};

export const useReviews = () => {
  const props = usePlatformReviewsServiceGetPlatformReviews({
    page: 1,
    paginate: 10,
  });
  const reviews = props.data?.data?.data as Review[];

  if (props.isLoading || props.isError) {
    return {
      ...props,
      reviews: [],
    };
  }

  return {
    ...props,
    reviews,
  };
};
export const useReviewsInfinity = createInfiniteHook({
  serviceFunction: usePlatformReviewsServiceGetPlatformReviewsInfinite,
  queryKey: ['reviews.infinite'],
});
