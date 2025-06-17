'use client';

import SearchResultItemSkeleton from '@/components/Search/Result/Item/Skeleton';
import { ReactNode, useCallback, useLayoutEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface InfiniteScrollProps<T,> {
  items: T[];
  request: (page: number) => Promise<{ items: T[] }>;
  totalPages: number;
  children: (item: T, index: number) => ReactNode;
}

const InfiniteScroll = <T,>({
  items,
  request,
  totalPages,
  children
}: InfiniteScrollProps<T>) => {
  const [page, setPage] = useState(1);
  const [visibleItems, setVisibleItems] = useState(items);
  const { ref, inView } = useInView({ threshold: 0.5 });

  const loadMore = useCallback(async () => {
    const response = await request(page + 1);
    setVisibleItems([...visibleItems, ...response.items]);
    setPage(page + 1);
  }, [page, request, visibleItems]);

  useLayoutEffect(() => {
    if (inView) loadMore();
  }, [inView, loadMore]);

  return (
    <>
      {visibleItems.map(children)}
      {page < totalPages && <SearchResultItemSkeleton ref={ref} />}
    </>
  );
}

export default InfiniteScroll;