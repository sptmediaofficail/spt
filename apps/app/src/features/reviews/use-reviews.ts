import { usePlatformReviewsServiceGetPlatformReviews } from '../../../../../libs/api-sdk/src/lib/gen2/queries';

type Review = {
  id: string;
  name: string;
  comment: string;
  avatar: string;
};

export const UseReviews = () => {
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

// const _mockedReviews = [
//   {
//     id: '1',
//     name: 'John Doe',
//     comment: 'Great service, I will definitely come back!',
//     avatar: '',
//   },
//   {
//     id: '2',
//     name: 'Jane Doe',
//     comment: 'I was very impressed with the quality of the service.',
//     avatar: '',
//   },
//   {
//     id: '3',
//     name: 'John Smith',
//     comment: 'I will recommend this service to all my friends.',
//     avatar: '',
//   },
// ];
