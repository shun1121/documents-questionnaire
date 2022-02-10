import React from 'react'
import { timeOptions } from "./selectBoxOptions"
import './storySelectbox.css'

interface SelectboxProps {
  value?: string;
  time?: string;
  options: (string | number)[][];
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const StorySelectbox = ({
  time,
  options=timeOptions,
  handleChange
}: SelectboxProps) => {

  return (
    <div className="wrapper">
      <div className="selectbox select">
        <select name="time" onChange={handleChange}>
          <option hidden>時間を選択してください。</option>
          {options.map((option, i) => (
            <option key={i} value={option[1]}>
              {option[1]}
            </option>
          ))}
        </select>
      </div>
      <p className="time">{time}</p>
    </div>
  )
}