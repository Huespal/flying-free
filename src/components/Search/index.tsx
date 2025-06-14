'use client'

import FieldSearch from '@/components/FieldSearch';

export const Search = () => {

  const onSearch = (value: string) => {
    console.log('Search value: ', value);
  }

  const onSubmit = () => {
    console.log('Submit form');
  }

  return (
    <form onSubmit={onSubmit}>
      <FieldSearch
        id="search-locations"
        placeholder="Search a location"
        onSearch={onSearch}
      />
    </form>
  );
}