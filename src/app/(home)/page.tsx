import SearchForm from '@/components/Search/Form';
import { getLocations } from '@/domain/locations/api';
import './styles.css';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const locations = await getLocations();

  return (
    <div className="page">
      <SearchForm locations={locations} />
    </div>
  );
}
