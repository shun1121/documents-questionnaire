import React, { VFC } from "react"
import "./storyTable.css"

interface TableProps {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const StoryTable: VFC<TableProps> = ({ handleInputChange }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className="th1">質問</th>
            <th className="th2">
              とても
              <br />
              同意
            </th>
            <th className="th3">
              少し
              <br />
              同意
            </th>
            <th className="th4">
              あまり
              <br />
              同意しない
            </th>
            <th className="th5">
              全く
              <br />
              同意しない
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="1">
            <td className="questionTtl td1">
              <div className="Question">
                <p className="QuestionNum">1. </p>
                <p>英語の授業中、教師は英語のみで教えるべきだ。</p>
              </div>
            </td>
            <td className="td2">
              <input
                type="radio"
                id="button1-1"
                data-testid='button1-1'
                name="q1"
                value="とても同意"
                onChange={handleInputChange}
              />
              <label htmlFor="button1-1" className="customButton"></label>
            </td>
            <td className="td3">
              <input
                type="radio"
                id="button1-2"
                data-testid='button1-2'
                name="q1"
                value="少し同意"
                onChange={handleInputChange}
              />
              <label htmlFor="button1-2" className="customButton"></label>
            </td>
            <td className="td4">
              <input
                type="radio"
                id="button1-3"
                data-testid='button1-3'
                name="q1"
                value="あまり同意しない"
                onChange={handleInputChange}
              />
              <label htmlFor="button1-3" className="customButton"></label>
            </td>
            <td className="td5">
              <input
                type="radio"
                id="button1-4"
                data-testid='button1-4'
                name="q1"
                value="全く同意しない"
                onChange={handleInputChange}
              />
              <label htmlFor="button1-4" className="customButton"></label>
            </td>
          </tr>
          <tr className="2">
            <td className="questionTtl td1">
              <div className="Question">
                <p className="QuestionNum">2. </p>
                <p>英語の例文や文章の音読をもっと取り入れるべきだ</p>
              </div>
            </td>
            <td className="td2">
              <input
                type="radio"
                id="button2-1"
                name="q2"
                value="とても同意"
                onChange={handleInputChange}
              />
              <label htmlFor="button2-1" className="customButton"></label>
            </td>
            <td className="td3">
              <input
                type="radio"
                id="button2-2"
                name="q2"
                value="少し同意"
                onChange={handleInputChange}
              />
              <label htmlFor="button2-2" className="customButton"></label>
            </td>
            <td className="td4">
              <input
                type="radio"
                id="button2-3"
                name="q2"
                value="あまり同意しない"
                onChange={handleInputChange}
              />
              <label htmlFor="button2-3" className="customButton"></label>
            </td>
            <td className="td5">
              <input
                type="radio"
                id="button2-4"
                name="q2"
                value="全く同意しない"
                onChange={handleInputChange}
              />
              <label htmlFor="button2-4" className="customButton"></label>
            </td>
          </tr>
          <tr className="3">
            <td className="questionTtl td1">
              <div className="Question">
                <p className="QuestionNum">3. </p>
                <p>中学英語段階で基本の発音記号は教えておくべきだ。</p>
              </div>
            </td>
            <td className="td2">
              <input
                type="radio"
                id="button3-1"
                name="q3"
                value="とても同意"
                onChange={handleInputChange}
              />
              <label htmlFor="button3-1" className="customButton"></label>
            </td>
            <td className="td3">
              <input
                type="radio"
                id="button3-2"
                name="q3"
                value="少し同意"
                onChange={handleInputChange}
              />
              <label htmlFor="button3-2" className="customButton"></label>
            </td>
            <td className="td4">
              <input
                type="radio"
                id="button3-3"
                name="q3"
                value="あまり同意しない"
                onChange={handleInputChange}
              />
              <label htmlFor="button3-3" className="customButton"></label>
            </td>
            <td className="td5">
              <input
                type="radio"
                id="button3-4"
                name="q3"
                value="全く同意しない"
                onChange={handleInputChange}
              />
              <label htmlFor="button3-4" className="customButton"></label>
            </td>
          </tr>
          <tr className="4">
            <td className="questionTtl td1">
              <div className="Question">
                <p className="QuestionNum">4. </p>
                <p>
                  英語の授業では、英語らしく発音しなければならない環境を作るべきだ。
                </p>
              </div>
            </td>
            <td className="td2">
              <input
                type="radio"
                id="button4-1"
                name="q4"
                value="とても同意"
                onChange={handleInputChange}
              />
              <label htmlFor="button4-1" className="customButton"></label>
            </td>
            <td className="td3">
              <input
                type="radio"
                id="button4-2"
                name="q4"
                value="少し同意"
                onChange={handleInputChange}
              />
              <label htmlFor="button4-2" className="customButton"></label>
            </td>
            <td className="td4">
              <input
                type="radio"
                id="button4-3"
                name="q4"
                value="あまり同意しない"
                onChange={handleInputChange}
              />
              <label htmlFor="button4-3" className="customButton"></label>
            </td>
            <td className="td5">
              <input
                type="radio"
                id="button4-4"
                name="q4"
                value="全く同意しない"
                onChange={handleInputChange}
              />
              <label htmlFor="button4-4" className="customButton"></label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
