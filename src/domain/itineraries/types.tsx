export interface ItineraryDate {
  year: number;
  month: number;
  dayOfMonth: number;
}

export interface ItineraryFullDate extends ItineraryDate {
  hourOfDay: number;
  minute: number;
  second: number;
}

export interface Itinerary {
  arrivalDate: ItineraryFullDate;
  departureDate: ItineraryFullDate;
  arrivalLocation: string;
  departureLocation: string;
  carrier: string;
  price: number;
}

interface Pagination {
  currentPage: number;
  total: number;
  totalPages: number;
}

export interface ItinerariesResponse {
  items: Itinerary[];
  pagination: Pagination;
}

export interface ItineraryFilters {
  from?: string | null;
  to?: string | null;
  date?: string | null;
}