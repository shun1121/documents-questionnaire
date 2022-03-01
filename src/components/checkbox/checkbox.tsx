import React, { VFC } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  checkbox,
  selectCheckboxItems,
} from "../../features/questionnaire/questionnaireSlice"
import { StoryCheckbox } from "./storyCheckbox"

export const Checkbox: VFC = () => {
  const dispatch = useDispatch()
  const checkedItems = useSelector(selectCheckboxItems)

  const handleChange = (e: any) => {
    const checkedVal = e.target.value
    console.log(checkedVal)
    dispatch(checkbox(checkedVal))
  }
  console.log(checkedItems)
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <StoryCheckbox
          data-testid='checkbox1'
          color="black"
          fontSize="15px"
          handleChange={handleChange}
          type="checkbox"
          name="checkbox"
          value="読む"
          checked={checkedItems.includes("読む")}
        />
        <StoryCheckbox
          data-testid='checkbox2'
          color="black"
          fontSize="15px"
          type="checkbox"
          name="checkbox"
          handleChange={handleChange}
          value="書く"
          checked={checkedItems.includes("書く")}
        />
        <StoryCheckbox
          data-testid='checkbox3'
          color="black"
          fontSize="15px"
          type="checkbox"
          name="checkbox"
          handleChange={handleChange}
          value="話す"
          checked={checkedItems.includes("話す")}
        />
        <StoryCheckbox
          data-testid='checkbox4'
          color="black"
          fontSize="15px"
          type="checkbox"
          name="checkbox"
          handleChange={handleChange}
          value="聞く"
          checked={checkedItems.includes("聞く")}
        />
      </div>
    </div>
  )
}

export default Checkbox
