import SearchResult from '@/components/Search/Result';
import { getItineraries } from '@/domain/itineraries/api';
import { ItineraryFilters } from '@/domain/itineraries/types';
import './styles.css';

interface SearchResultsProps {
  searchParams: Promise<ItineraryFilters>;
}

export default async function SearchResults({
  searchParams
}: SearchResultsProps) {
  const filters = await searchParams;
  const response = await getItineraries(1, filters);
  const itineraries = response?.items ?? [];
  const pagination = response?.pagination;

  return (
    <div className="search-results-page">
      <SearchResult
        itineraries={itineraries}
        totalPages={pagination.totalPages ?? 1}
      />
    </div>
  );
}
