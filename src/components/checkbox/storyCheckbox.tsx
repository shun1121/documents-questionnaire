import * as React from 'react'
import "./storyCheckbox.css"

interface CheckboxProps {
  color?: string
  type: string
  name: string
  value: string
  fontSize?: "10px" | "15px" | "20px"
  checked?: boolean
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const StoryCheckbox = ({
  color,
  type,
  name,
  value,
  fontSize,
  checked,
  handleChange,
}: CheckboxProps) => {
  const mode = fontSize === "15px" ? "paddingT" : ""
  const labelStyle = {
    fontSize: fontSize,
  }
  const style = {
    color,
    cursor: "pointer",
    fontSize: fontSize,
  }
  return (
    <div className="checkbox-wrap" style={style}>
      <input
        id={value}
        type={type}
        name={name}
        value={value}
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor={value} className={mode} style={labelStyle}>
        {value}
      </label>
    </div>
  )
}
