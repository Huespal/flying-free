import { SearchForm } from '@/components/SearchForm';
import { getLocations } from '@/domain/locations/api';
import './page.css';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const locations = await getLocations();

  return (
    <div className="page">
      <main>
        <SearchForm locations={locations} />
      </main>
      <footer>
      </footer>
    </div>
  );
}
