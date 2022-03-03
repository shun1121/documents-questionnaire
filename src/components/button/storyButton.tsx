import React from "react"
import "./storyButton.css"

interface ButtonProps {
  id?: string
  primary?: boolean
  backgroundColor?: string
  color?: string
  size?: "small" | "medium" | "large"
  label?: string
  handleClick?: () => void
}

export const StoryButton = ({
  id,
  primary = false,
  backgroundColor,
  color,
  size = "medium",
  label,
  handleClick,
}: ButtonProps) => {
  const mode = primary ? "button-primary" : "button-secondary"
  let scale = 1
  if (size === "small") {
    scale = 0.5
  }
  if (size === "large") {
    scale = 1.5
  }
  const style = {
    backgroundColor,
    color,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: "none",
    cursor: "pointer",
  }
  return (
    <button
      id={id}
      onClick={handleClick}
      className={["storybook-button", mode].join(" ")}
      style={style}
    >
      {label}
    </button>
  )
}

export default StoryButton
