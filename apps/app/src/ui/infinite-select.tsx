import React from 'react';
import { useInfiniteScroll } from '@heroui/use-infinite-scroll';
import { Select, SelectProps } from '@heroui/select';

export function InfiniteSelect(
  props: SelectProps & {
    hasNextPage: boolean;
    fetchNextPage: () => void;
    isFetchingNextPage: boolean;
    isEnabled?: boolean;
    selectionMode?: 'single' | 'multiple'; // Add dynamic selection mode
  }
) {
  const [isOpen, setIsOpen] = React.useState(false);
  const {
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    selectionMode = 'single', // Default to 'single' if not provided
    ...restProps
  } = props;

  const [, scrollerRef] = useInfiniteScroll({
    hasMore: hasNextPage,
    isEnabled: isOpen,
    shouldUseLoader: false,
    onLoadMore: fetchNextPage,
  });

  return (
    <Select
      isLoading={isFetchingNextPage}
      scrollRef={scrollerRef}
      selectionMode={selectionMode}
      onOpenChange={setIsOpen}
      {...restProps}
    >
      {props.children}
    </Select>
  );
}
