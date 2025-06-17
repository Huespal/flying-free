'use client'

import ResultItem from '@/components/Search/Result/Item';
import InfiniteScroll from '@/components/shared/InfiniteScroll';
import { formatDate } from '@/domain/itineraries/helpers';
import { type Itinerary } from '@/domain/itineraries/types';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

interface SearchResultProps {
  itineraries: Itinerary[];
}

const SearchResult = ({
  itineraries
}: SearchResultProps) => {
  const searchParams = useSearchParams()
  const from = searchParams.get('from');
  const to = searchParams.get('to');
  const inputDate = searchParams.get('date');

  const date = useMemo(() =>
    inputDate ? new Date(inputDate) : new Date(), [inputDate]);
  const dateString = useMemo(() => formatDate({
    dayOfMonth: date.getDate(), month: date.getMonth(), year: date.getFullYear()
  }), [date]);

  const results = useMemo(() => {
    const noFilters = !from && !to && !inputDate;

    return (noFilters ? itineraries : itineraries.filter(({
      departureLocation, arrivalLocation, departureDate
    }) => {
      const fromMatch = !!from
        ? departureLocation.toLowerCase() === from.toLowerCase()
        : true;
      const toMatch = !!to
        ? arrivalLocation.toLowerCase() === to.toLowerCase()
        : true;

      const itineraryDate = new Date(
        departureDate.year, departureDate.month, departureDate.dayOfMonth,
        departureDate.hourOfDay, departureDate.minute, departureDate.second
      );
      const dateMatch = date <= itineraryDate;

      return fromMatch && toMatch && dateMatch;
    })).sort((a, b) => a.price - b.price)
  }, [from, to, date, inputDate, itineraries]);

  return (
    <>
      <Link href="/">{`< Search again`}</Link>
      <h1>Itineraries</h1>
      <p>{`
        Listing available itineraries from ${from || 'everywhere'}
        starting at ${dateString} to ${to || 'everywhere'},
        from lower starting price to higher. 
      `}</p>
      {results.length <= 0 && <p>There are no itineraries</p>}
      <InfiniteScroll<Itinerary> items={results}>
        {(item, index) => <ResultItem key={index} {...item} />}
      </InfiniteScroll>
    </>
  );
}

export default SearchResult;
