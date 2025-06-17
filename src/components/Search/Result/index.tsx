'use client'

import ResultItem from '@/components/Search/Result/Item';
import InfiniteScroll from '@/components/shared/InfiniteScroll';
import { getItineraries } from '@/domain/itineraries/api';
import { formatDate } from '@/domain/itineraries/helpers';
import { type Itinerary } from '@/domain/itineraries/types';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

interface SearchResultProps {
  itineraries: Itinerary[];
  totalPages: number;
}

const SearchResult = ({
  itineraries,
  totalPages
}: SearchResultProps) => {
  const searchParams = useSearchParams()
  const from = searchParams.get('from');
  const to = searchParams.get('to');
  const inputDate = searchParams.get('date');
  const filters = { from, to, date: inputDate };

  const date = useMemo(() =>
    inputDate ? new Date(inputDate) : new Date(), [inputDate]);
  const dateString = useMemo(() => formatDate({
    dayOfMonth: date.getDate(), month: date.getMonth(), year: date.getFullYear()
  }), [date]);

  return (
    <>
      <Link href="/">{`< Search again`}</Link>
      <h1>Itineraries</h1>
      <p>{`
        Listing available itineraries from ${from || 'everywhere'}
        starting at ${dateString} to ${to || 'everywhere'},
        from lower starting price to higher.
      `}</p>
      {itineraries.length <= 0 && <p>There are no itineraries</p>}
      <InfiniteScroll<Itinerary>
        items={itineraries}
        totalPages={totalPages}
        request={page => getItineraries(page, filters)}
      >
        {(item, index) => <ResultItem key={index} {...item} />}
      </InfiniteScroll>
    </>
  );
}

export default SearchResult;
