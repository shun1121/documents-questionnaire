import React, {useState} from "react"
import Checkbox from "./checkbox"

const CheckboxWrap = () => {
  const [checkedItem, setCheckedItem] = useState([])
  const handleChange = (e: any) => {
    if (e.target.checked) {
      console.log(e.target.value)
      setCheckedItem(checkedItem.concat(e.target.value))
    }
  }
  console.log(checkedItem)

  return (
    <>
      {/* <Checkbox text="読む" onChange={handleChange} /> */}
      {/* <Checkbox text="書く" onChange={handleChange} />
      <Checkbox text="話す" onChange={handleChange} />
      <Checkbox text="聞く" onChange={handleChange} /> */}
    </>
  )
}

export default CheckboxWrap

