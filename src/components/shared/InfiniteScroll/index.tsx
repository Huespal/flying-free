'use client';

import { ReactNode, useState } from 'react';

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

  const loadMore = async () => {
    const response = await request(page + 1);
    setVisibleItems([...visibleItems, ...response.items]);
    setPage(page + 1);
  }

  return (
    <>
      {visibleItems.map(children)}
      {page < totalPages && <button onClick={loadMore}>Load more</button>}
    </>
  );
}

export default InfiniteScroll;