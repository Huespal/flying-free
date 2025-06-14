'use client';

import './styles.css';

interface FieldDateProps {
  id: string;
  name: string;
  label?: string;
  onChange: (date: string) => void;
}

const FieldDate = ({
  id,
  name,
  label,
  onChange
}: FieldDateProps) => {
  return (
    <fieldset className="field-date">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        name={name}
        type="date"
        onChange={evt => { onChange(evt.target.value); }}
      />
    </fieldset>
  );
}

export default FieldDate;