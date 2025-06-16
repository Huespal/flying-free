'use client';

import './styles.css';

interface FieldDateProps {
  id: string;
  name: string;
  label?: string;
  min?: string;
  max?: string;
  onChange: (date: string) => void;
}

const FieldDate = ({
  id,
  name,
  label,
  min,
  max,
  onChange
}: FieldDateProps) => (
  <fieldset className="field-date">
    {label && <label htmlFor={id}>{label}</label>}
    <input
      id={id}
      name={name}
      min={min}
      max={max}
      type="date"
      onChange={evt => { onChange(evt.target.value); }}
    />
  </fieldset>
);

export default FieldDate;