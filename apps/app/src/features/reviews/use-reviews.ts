import { usePlatformReviewsServiceGetPlatformReviews } from '../../../../../libs/api-sdk/src/lib/gen2/queries';
import { usePlatformReviewsServiceGetPlatformReviewsInfinite } from '../../../../../libs/api-sdk/src/lib/gen2/queries/infiniteQueries';

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

export const useReviewsInfinity = () => {
  const initialPageSize = 20;
  const subsequentPageSize = 10;

  const props = usePlatformReviewsServiceGetPlatformReviewsInfinite(
    {
      paginate: initialPageSize,
    },
    ['reviews.infinite'],
    {
      getNextPageParam: (lastPage) =>
        lastPage.data.links.next
          ? new URL(lastPage.data.links.next).searchParams.get('page')
          : null,
      initialPageParam: 1,
    }
  );

  const allReviews = props.data?.pages.flatMap((page) => page.data?.data) || [];

  return {
    ...props,
    reviews: allReviews as Review[],
    pageSize:
      allReviews.length > initialPageSize
        ? subsequentPageSize
        : initialPageSize,
  };
};
