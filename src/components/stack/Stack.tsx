import React, { ReactNode } from "react"

interface StackProps {
  children?: ReactNode
  spacing?: number
  direction?: "row" | "column"
  wrap?: boolean
  handleClick?: () => void
}

export const Stack = ({
  children,
  spacing = 2,
  direction,
  wrap = false,
  handleClick,
}: StackProps) => {
  const style = {
    display: "flex",
    gap: `${spacing * 0.25}rem`,
    // ↓ どう対処する？
    flexWrap: wrap ? ("wrap" as const) : ("nowrap" as const),
    flexDirection: direction,
  }
  return (
    <div onClick={handleClick} style={style}>
      {children}
    </div>
  )
}

export default Stack
