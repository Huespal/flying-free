import { api } from '@/core/api';
import { ItinerariesResponse, ItineraryFilters } from '@/domain/itineraries/types';

export const getItineraries = (
  page: number = 1,
  filters?: ItineraryFilters
): Promise<ItinerariesResponse> => api(`/itineraries?page=${page}` +
  `&from=${filters?.from ?? ''}` +
  `&to=${filters?.to ?? ''}` +
  `&date=${filters?.date ?? ''}`, 'GET');