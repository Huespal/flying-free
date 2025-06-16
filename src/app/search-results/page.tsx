import SearchResult from '@/components/Search/Result';
import { getItineraries } from '@/domain/itineraries/api';
import './styles.css';

export const dynamic = 'force-dynamic';

export default async function SearchResults() {
  const itineraries = await getItineraries();

  return (
    <div className="search-results-page">
      <SearchResult itineraries={itineraries} />
    </div>
  );
}
