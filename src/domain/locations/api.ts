import { api } from '@/core/api';

export const getLocations = () => api('/locations', 'GET');