import React from 'react'
import './storyInput.css'

interface InputProps {
  text: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
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