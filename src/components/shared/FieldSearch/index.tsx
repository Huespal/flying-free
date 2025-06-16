'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import './styles.css';

export interface FieldSearchProps {
  id: string;
  name: string;
  value?: string;
  label?: string;
  placeholder?: string;
  isAuto?: boolean;
  className?: HTMLElement['className'];
  error?: string;
  onSearch: (value: string) => void;
}

const FieldSearch = ({
  id,
  name,
  value = '',
  label,
  placeholder,
  isAuto = false,
  className = '',
  error,
  onSearch
}: FieldSearchProps) => {
  const [innerValue, setInnerValue] = useState(value);

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setInnerValue(target.value);
    if (isAuto) onSearch(target.value);
  }

  useEffect(() => {
    setInnerValue(value);
  }, [value]);

  return (
    <fieldset className={`field-search ${className}`}>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        name={name}
        className={error ? 'error' : undefined}
        type="search"
        autoComplete="off"
        placeholder={placeholder}
        value={innerValue}
        onChange={onChange}
      />
      <button
        type="button"
        aria-label="Search"
        onClick={() => { onSearch(innerValue); }}
      >🔎</button>
      <p className="error-message">{error}</p>
    </fieldset>
  );
}

export default FieldSearch;