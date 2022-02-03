import React from 'react';
import './checkbox1.css'

interface CheckboxProps {
  color?: string;
  value: string;
  type: string;
  name: string;
  fontSize?: '10px' | '15px' | '20px';
  handleChange: (e:any) => void;
  checked?: boolean
}

export const Checkbox1 = ({
  color,
  fontSize,
  value,
  handleChange,
  checked,
  type="checkbox",
  name="checkbox"
}: CheckboxProps) => {
  const mode = fontSize === '15px' ? 'paddingT': ''
  const labelStyle = {
    fontSize: fontSize
  }
  const style = {
    color,
    cursor: 'pointer',
    fontSize: fontSize
  }
  return (
    <div className="checkbox-wrap" style={style}>
      <input
        id={value}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        checked={checked}
      />
      <label htmlFor={value} className={mode} style={labelStyle}>{value}</label>
    </div>
  );
};
