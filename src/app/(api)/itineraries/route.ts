import { type NextRequest } from 'next/server';
import itineraries from './itineraries.json';

const PAGE_SIZE = 2;

const filterItems = (
  from: string | null, to: string | null, paramDate: string | null
) => {
  const noFilters = !from && !to && !paramDate;

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

    const date = paramDate ? new Date(paramDate) : new Date();
    const dateMatch = date <= itineraryDate;

    return fromMatch && toMatch && dateMatch;
  })).sort((a, b) => a.price - b.price);
}

// It may be improved by avoiding to request for a
// higher page than the total, and non-existent filters.  
export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const page = parseInt(params.get('page') || '1');
  const from = params.get('from');
  const to = params.get('to');
  const date = params.get('date');

  const items = filterItems(from, to, date);
  const itemsPage = items
    .slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const maxItems = items.length;
  const maxPages = Math.ceil(maxItems / PAGE_SIZE);

  return Response.json({
    items: itemsPage,
    pagination: {
      currentPage: page,
      totalPages: maxPages,
      total: maxItems
    }
  });
}