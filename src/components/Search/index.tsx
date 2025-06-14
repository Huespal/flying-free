'use client'

import Button from '@/components/Button';
import FieldDate from '@/components/FieldDate';
import FieldSearch from '@/components/FieldSearch';
import { FormEvent } from 'react';

export const Search = () => {

  const onSearch = (value: string) => {
    console.log('Search value: ', value);
  }

  const onChangeDate = (date: string) => {
    console.log('Date from: ', date);
  }

  const onSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    console.log('Submit form!');
  }

  return (
    <form onSubmit={onSubmit}>
      <FieldSearch
        id="departure-location"
        name="departureLocation"
        label="Departure location"
        placeholder="Search for a location"
        onSearch={onSearch}
      />
      <FieldDate
        id="departure-date"
        name="departureDate"
        label="Departure date"
        onChange={onChangeDate}
      />
      <Button type="submit">Search</Button>
    </form>
  );
}