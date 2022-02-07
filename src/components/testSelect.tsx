import React from 'react'
import './testSelect.css'

// interface SelectboxProps {
//   value?: string;
//   time?: string;
//   options: (string | number)[][];
//   handleChange: (e) => Element;
// }

export const TestStorySelectbox = (
//   {
//   value='default',
//   time,
//   options,
//   handleChange
// }
) => {

  return (
    <div className="cp_ipselect cp_sl02">
      <select>
        <option value="" hidden>Choose</option>
        <option value="1">cat</option>
        <option value="2">dog</option>
        <option value="3">rabbit</option>
        <option value="4">squirrel</option>
      </select>
    </div>
  )
}