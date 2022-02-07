import React from 'react'
// import { timeOptions } from "./selectBoxOptions"
import './StorySelectbox.css'

interface SelectboxProps {
  value?: string;
  time?: string;
  options: (string | number)[][];
  handleChange: (e:any) => void;
}

export const StorySelectbox = ({
  value='default',
  time,
  options,
  handleChange
}: SelectboxProps) => {
  // const options = timeOptions
  console.log(options)
  console.log(value)
  console.log(time)

  return (
    <div className="wrapper">
      <div className="selectbox select">
        <select name="time" value={value} onChange={handleChange}>
          <option hidden>時間を選択してください。</option>
          {options.map((option) => (
            <option key={option[0]} value={option[1]}>
              {option[1]}
            </option>
          ))}
        </select>
      </div>
      <p className="time">{time}</p>
    </div>
  )
}