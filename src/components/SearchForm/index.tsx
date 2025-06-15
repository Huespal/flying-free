'use client'

import Button from '@/components/Button';
import FieldDate from '@/components/FieldDate';
import FieldSelectSearch from '@/components/FieldSelectSearch';
import { FormEvent, useState } from 'react';

interface SearchFormProps {
  locations: string[];
}

export const SearchForm = ({
  locations
}: SearchFormProps) => {
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');
  const [date, setDate] = useState('');

  const onSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    console.log('Submit form!');
    console.log('Departure: ', departure);
    console.log('Arrival: ', arrival);
    console.log('Date: ', date);
  }

  return (
    <form onSubmit={onSubmit}>
      <FieldSelectSearch
        id="departure-location"
        name="departureLocation"
        label="Departure location"
        placeholder="Search for a location"
        options={locations}
        onSelect={setDeparture}
      />
      <FieldSelectSearch
        id="arrival-location"
        name="arrivalLocation"
        label="Arrival location"
        placeholder="Search for a location"
        options={locations}
        onSelect={setArrival}
      />
      <FieldDate
        id="departure-date"
        name="departureDate"
        label="Departure date"
        onChange={setDate}
      />
      <Button type="submit">Search</Button>
    </form>
  );
}