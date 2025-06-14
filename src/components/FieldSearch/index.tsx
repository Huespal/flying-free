'use client';

import { useState } from 'react';
import './styles.css';

interface FieldSearchProps {
  id: string;
  name: string;
  label?: string;
  placeholder?: string;
  onSearch: (value: string) => void;
}

const FieldSearch = ({
  id,
  name,
  label,
  placeholder,
  onSearch
}: FieldSearchProps) => {
  const [value, setValue] = useState('');

  return (
    <fieldset className="field-search">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        name={name}
        type="search"
        autoComplete="off"
        placeholder={placeholder}
        value={value}
        onChange={evt => { setValue(evt.target.value); }}
      />
      <button
        type="button"
        aria-label="Search"
        onClick={() => { onSearch(value); }}
      >🔎</button>
    </fieldset>
  );
}

export default FieldSearch;