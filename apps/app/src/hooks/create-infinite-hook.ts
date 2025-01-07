type ServerFunction<T> = (
  params: { paginate: number | undefined },
  queryKey: string[],
  config: {
    getNextPageParam: (lastPage) => string | null;
    initialPageParam: number;
  }
) => T;

type InfiniteHookParams<T> = {
  serviceFunction: ServerFunction<T>;
  initialPageSize?: number;
  subsequentPageSize?: number;
  queryKey: string[];
  additionalParams?: { [key: string]: any };
};

export function createInfiniteHook<Record, T>({
  serviceFunction,
  initialPageSize = 20,
  subsequentPageSize = 10,
  queryKey,
  additionalParams = {},
}: InfiniteHookParams<T>) {
  return () => {
    const props = serviceFunction(
      {
        paginate: initialPageSize,
        ...{
          contentLanguage: 'ar',
          ...additionalParams,
        },
      },
      queryKey,
      {
        getNextPageParam: (lastPage) =>
          lastPage.data.links.next
            ? new URL(lastPage.data.links.next).searchParams.get('page')
            : null,
        initialPageParam: 1,
      }
    );

    const allItems =
      props.data?.pages.flatMap((page: any) => page.data?.data) || [];

    return {
      ...props,
      items: allItems as Record[],
      pageSize:
        allItems.length > initialPageSize
          ? subsequentPageSize
          : initialPageSize,
    };
  };
}
