import React, { useState } from "react"

const Hello: React.VFC = () => {
  const [increment, setIncrement] = useState<number>(0)

  const greetingText: (date: Date) => string = (date) => {
    // ↑のstringは返り値の型？
    // const hours = 6
    const hours = date.getHours() + 1
    console.log(new Date().getHours())
    if (4 < hours && hours < 11) {
      console.log(hours)
      return "Guten Morgen!!"
    } else if (11 < hours && hours < 17) {
      console.log(hours)
      return "Good Afternoon!!"
    } else {
      console.log(hours)
      return "Good Evening!!"
    }
  }

  const countUp = (): void => {
    setIncrement(increment + 1)
  }

  const countDown = (): void => {
    setIncrement(increment - 1)
  }
  return (
    <>
      <h2>Lets create a setup for redux!!</h2>
      <h1>{greetingText(new Date())}</h1>
      <button style={{ backgroundColor: "red" }} onClick={countUp}>
        +
      </button>
      <button style={{ backgroundColor: "lightBlue" }} onClick={countDown}>
        -
      </button>
      <p>{increment}</p>
    </>
  )
}

export default Hello
