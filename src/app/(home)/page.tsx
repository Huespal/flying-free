import SearchForm from '@/components/Search/Form';
import { getLocations } from '@/domain/locations/api';
import './styles.css';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const locations = await getLocations();

  return (
    <div className="home-page">
      <h1>Search an itinerary</h1>
      <p>Find your next destination!</p>
      <SearchForm locations={locations} />
    </div>
  );
}
