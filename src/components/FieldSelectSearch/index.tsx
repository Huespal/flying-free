import FieldSearch, { type FieldSearchProps } from '@/components/FieldSearch';
import useClickOutside from '@/core/hooks/useClickOutside';
import { useMemo, useRef, useState } from 'react';
import './styles.css';

interface FieldSelectSearchProps extends Omit<FieldSearchProps, 'onSearch'> {
  options: string[];
  onSelect: (option: string) => void;
}

const FieldSelectSearch = ({
  options,
  onSelect,
  ...fieldSearchProps
}: FieldSelectSearchProps) => {
  const [results, setResults] = useState(options);
  const [showResults, setShowResults] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const ref = useRef<HTMLUListElement>(null);

  const fieldSearchClassName = useMemo(() =>
    showResults ? 'expand-field' : undefined, [showResults]);

  const onSearch = (searchValue: string) => {
    const filteredResults = !!searchValue
      ? options.filter(option =>
        option.toLowerCase().includes(searchValue.toLowerCase()))
      : [];
    setResults(filteredResults);
    setShowResults(true);
  }

  const handleSelect = (result: string) => {
    onSelect(result);
    setShowResults(false);
    setSearchValue(result);
  }

  useClickOutside(ref, () => { setShowResults(false); });

  return (
    <div className="field-select-search">
      <FieldSearch
        {...fieldSearchProps} isAuto
        value={searchValue}
        className={fieldSearchClassName}
        onSearch={onSearch}
      />
      {showResults && (
        <ul ref={ref} className="results-box">
          {results.length <= 0 && (
            <li className="results-box-empty">There are no results</li>
          )}
          {results.map(result => (
            <li
              key={result}
              onClick={() => { handleSelect(result); }}
            >{result}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FieldSelectSearch;