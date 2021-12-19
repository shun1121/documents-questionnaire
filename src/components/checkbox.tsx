import React, { VFC } from "react"
import { useDispatch, useSelector } from "react-redux"
import { checkbox, selectCheckboxItems } from "../features/questionnaire/questionnaireSlice"

const Checkbox: VFC = () => {
  const dispatch = useDispatch()
  const checkedItems = useSelector(selectCheckboxItems)

  const handleChange = (e: any) => {
    const checkedVal = e.target.value
    dispatch(checkbox(checkedVal))
  }
  return (
    <div>
      {/* checkedを活性化させるためには、reduxに保存した値をここで使わないといけない。 */}
      <input type="checkbox" className="checkbox" name="checkbox" value="読む" onChange={handleChange} checked={checkedItems.includes("読む")} />
      <span>読む</span>
      <input type="checkbox" className="checkbox" name="checkbox" value="書く" onChange={handleChange} checked={checkedItems.includes("書く")} />
      <span>書く</span>
      <input type="checkbox" className="checkbox" name="checkbox" value="話す" onChange={handleChange} checked={checkedItems.includes("話す")} />
      <span>話す</span>
      <input type="checkbox" className="checkbox" name="checkbox" value="聞く" onChange={handleChange} checked={checkedItems.includes("聞く")} />
      <span>聞く</span>
    </div>
  )
}

export default Checkbox











// import React, {useState} from "react"

// type checkboxType = {
//   checked?: boolean
// }

// const Checkbox = (props) => {
//   const [checkedItem, setCheckedItem] = useState([])

//   const  = props
//   const handleChange = (e: any) => {
//     if (e.target.checked) {
//       console.log(e.target.value)
//       setCheckedItem(checkedItem.concat(e.target.value))
//     }
//   }
//   console.log(checkedItem)

  // useEffect(() => {
  //   const checkedBoxes= document.querySelectorAll('input[type=checkbox]:checked');
  //   console.log(checkedBoxes)
  // },[])

  // let targets: any = document.querySelectorAll(`input[type='checkbox'][name='checkbox']`);
  // console.log(targets)
  // let cnt = 0
  // for (const i of targets) {
  //     // i.checked = true;
  //     if (!i.checked) {
  //       cnt++
  //     }
  //     console.log(i.checked)
  // }
  // console.log(cnt)
  // const handleChange = (e: any) => {
  //   let targets: any = document.querySelectorAll(`input[type='checkbox'][name='checkbox']`);
  //   let cnt = 0
  //   for (const i of targets) {
  //       // i.checked = true;
  //       if (i.checked) {
  //         cnt++
  //       }
  //   }
  //   console.log(cnt)

  //   let flg
  //   if (e.target.checked) {
  //     flg = 1
  //     setCheckedItem(checkedItem.concat(e.target.value))
  //   } else {
  //     flg = 0
  //     const checked = checkedItem.filter((item) => item.checked)
  //   }
  // }
  // console.log(checkedItem)
  
//   return (
//     <>
//       <input type="checkbox" className="checkbox" value= onChange={handleChange} />
//       <span></span>
//     </>
//   )
// }

// export default Checkbox