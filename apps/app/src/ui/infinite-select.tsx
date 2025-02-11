import React from 'react';
import { useInfiniteScroll } from "@heroui/use-infinite-scroll";
import { Select, SelectProps } from "@heroui/select";

export function InfiniteSelect(
  props: SelectProps & {
    hasNextPage: boolean;
    fetchNextPage: () => void;
    isFetchingNextPage: boolean;
    isEnabled?: boolean;
  }
) {
  const [isOpen, setIsOpen] = React.useState(false);
  const { hasNextPage, fetchNextPage, isFetchingNextPage } = props;

  const [, scrollerRef] = useInfiniteScroll({
    hasMore: hasNextPage,
    isEnabled: isOpen,
    shouldUseLoader: false, // We don't want to show the loader at the bottom of the list
    onLoadMore: fetchNextPage,
  });

  return (
    <Select
      isLoading={isFetchingNextPage}
      scrollRef={scrollerRef}
      selectionMode="single"
      onOpenChange={setIsOpen}
      {...props}
    >
      {props.children}
    </Select>
  );
}
