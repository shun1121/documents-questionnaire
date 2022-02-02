import React from 'react';
import './checkbox1.css'

interface CheckboxProps {
  color?: string;
  label?: string;
  fontSize?: '10px' | '15px' | '20px';
  handleChange?: () => void;
}

export const Checkbox1 = ({
  color,
  label,
  fontSize,
  handleChange,
}: CheckboxProps) => {
  console.log(label)
  console.log(fontSize)
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
        id="sample1"
        type="checkbox"
        className="checkbox"
        name="checkbox"
        value={label}
        onChange={handleChange}
      />
      <label htmlFor="sample1" className={mode} style={labelStyle}>{label}</label>
    </div>
  );
};
