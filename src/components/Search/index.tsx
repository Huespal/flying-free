'use client'

import Button from '@/components/Button';
import FieldSearch from '@/components/FieldSearch';
import { FormEvent } from 'react';

export const Search = () => {

  const onSearch = (value: string) => {
    console.log('Search value: ', value);
  }

  const onSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    console.log('Submit form!');
  }

  return (
    <form onSubmit={onSubmit}>
      <FieldSearch
        id="search-locations"
        placeholder="Search a location"
        onSearch={onSearch}
      />
      <Button type="submit">Search</Button>
    </form>
  );
}