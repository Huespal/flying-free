import { api } from '@/core/api';

export const getItineraries = () => api('/itineraries', 'GET');