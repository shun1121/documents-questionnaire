import React from 'react'
import './StoryInput.css'

interface InputProps {
  text: string;
  handleChange: (e:any) => void;
}

export const StoryInput = ({
  text,
  handleChange
}: InputProps) => {

  return (
    <>
      <textarea value={text} onChange={handleChange} />
    </>
  )
}