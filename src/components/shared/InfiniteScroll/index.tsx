'use client';

import { ReactNode, useEffect, useState } from 'react';

interface InfiniteScrollProps<T> {
  items: T[];
  children: (item: T, index: number) => ReactNode;
}

const PAGE_SIZE = 10;

const InfiniteScroll = <T,>({
  items,
  children
}: InfiniteScrollProps<T>) => {
  const [page, setPage] = useState(1);
  const [visibleItems, setVisibleItems] = useState(items.slice(0, PAGE_SIZE));

  useEffect(() => {
    const nextPage = items.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)
    setVisibleItems([...visibleItems, ...nextPage]);
  }, [page]);

  return (
    <>
      {visibleItems.map(children)}
      <button onClick={() => setPage(page + 1)}>Load more</button>
    </>
  );
}

export default InfiniteScroll;