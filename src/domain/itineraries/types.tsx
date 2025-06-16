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