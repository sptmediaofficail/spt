type InfiniteHookParams<TData, TQueryKey extends string> = {
  serviceFunction: (
    params: { paginate: number | undefined },
    queryKey: TQueryKey[],
    config: {
      getNextPageParam: (lastPage) => string | null;
      initialPageParam: number;
    }
  ) => TData;
  initialPageSize?: number;
  subsequentPageSize?: number;
  queryKey: TQueryKey[];
  additionalParams?: { [key: string]: any };
};

export function createInfiniteHook<TData, TItem, TQueryKey extends string>({
  serviceFunction,
  initialPageSize = 20,
  subsequentPageSize = 10,
  queryKey,
  additionalParams = {},
}: InfiniteHookParams<TData, TQueryKey>) {
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
      items: allItems as TItem[],
      pageSize:
        allItems.length > initialPageSize
          ? subsequentPageSize
          : initialPageSize,
    };
  };
}
