'use client'

import Button from '@/components/shared/Button';
import FieldDate from '@/components/shared/FieldDate';
import FieldSelectSearch from '@/components/shared/FieldSelectSearch';
import { useRouter } from 'next/navigation';
import { FormEvent, useEffect, useState } from 'react';
import './styles.css';

interface SearchFormProps {
  locations: string[];
}

const SearchForm = ({
  locations
}: SearchFormProps) => {
  const router = useRouter();

  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');
  const [date, setDate] = useState('');
  const [locationError, setLocationError] = useState('');

  const today = new Date().toISOString().slice(0, 10);

  const onSubmit = (evt: FormEvent) => {
    evt.preventDefault();

    const params = new URLSearchParams()
    params.set('from', departure);
    params.set('to', arrival);
    params.set('date', date);

    router.push(`/search-results?${params.toString()}`);
  }

  useEffect(() => {
    const locationErrorMsg = 'Location conflict';
    const locationConflict = !!departure && !!arrival && departure === arrival;
    setLocationError(locationConflict ? locationErrorMsg : '');
  }, [departure, arrival]);

  return (
    <form className="search-form" onSubmit={onSubmit}>
      <FieldSelectSearch
        id="departure-location"
        name="departureLocation"
        label="Departure location"
        placeholder="Search for a location"
        error={locationError}
        options={locations}
        onSelect={setDeparture}
      />
      <FieldSelectSearch
        id="arrival-location"
        name="arrivalLocation"
        label="Arrival location"
        placeholder="Search for a location"
        error={locationError}
        options={locations}
        onSelect={setArrival}
      />
      <FieldDate
        id="departure-date"
        name="departureDate"
        label="Departure date"
        min={today}
        onChange={setDate}
      />
      <Button type="submit" disabled={!!locationError}>Search</Button>
    </form>
  );
}

export default SearchForm;