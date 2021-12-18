import React, { useState } from "react"

const TestCheckbox = () => {
  const initialVal = { 読む: true, 書く: false, 話す: false };
  const [val, setVal] = useState(initialVal);

  const handleChange = e => {
    // valをコピーして、そこに イベントvalue: !そのboolean を追加
    const newVal = Object.assign({}, val, {
      // ↓これ何？ チェックしたもののvalueをとってきて、その値があるかないかでbooleanを切り替えて
      [e.target.value]: !val[e.target.value]
    });
    setVal(newVal);
  };
  // ↓ val[item]はbooleanであり、値がtrueのもの（そのキー）だけで新しい配列を作る。
  // console.log(Object.keys(val).filter(item => val[item]).join(', '))

  return (
    <>
      <label>
        <input
          type="checkbox"
          value="読む"
          onChange={handleChange}
          checked={val['読む']}
        />
        読む
      </label>
      <label>
        <input
          type="checkbox"
          value="書く"
          onChange={handleChange}
          checked={val['書く']}
        />
        書く
      </label>
      <label>
        <input
          type="checkbox"
          value="話す"
          onChange={handleChange}
          checked={val['話す']}
        />
        話す
      </label>
      <p>選択値：{Object.keys(val).filter(item => val[item]).join(', ')}</p>
    </>
  );
}

export default TestCheckbox
