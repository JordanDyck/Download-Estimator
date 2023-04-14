import {useState} from "react"
import Select from "react-select"

import "./App.scss"

const speedOptions = [
  {value: "GB", label: "GB"},
  {value: "MB", label: "MB"},
  {value: "KB", label: "KB"},
]
const timeOptions = [
  {value: "Sec", label: "Sec"},
  {value: "Mins", label: "Mins"},
  {value: "Hours", label: "Hours"},
  {value: "Days", label: "Days"},
]

function App() {
  const [estimate, setEstimate] = useState({speed: "", size: ""})

  // stores the size
  const handleSize = (e) => {
    setEstimate((curr) => ({
      ...curr,
      size: e.target.value,
    }))
  }

  //stores the speed
  const handleSpeed = (e) => {
    setEstimate((curr) => ({
      ...curr,
      speed: e.target.value,
    }))
  }

  // console.log("size:", estimate.size, "speed:", estimate.speed)
  return (
    <div className="wrapper">
      <header className="title"> How Long To Download</header>
      <div className="size-container">
        <input
          className="size-input"
          type="number"
          placeholder="Download Size"
        />
        <Select
          className="option"
          options={speedOptions}
          defaultValue={speedOptions[0]}
          isSearchable={false}
        />
      </div>

      <div className="speed-container">
        <input
          className="speed-input"
          type="number"
          placeholder="Download speed..."
          onChange={handleSpeed}
        />
        <Select
          className="option"
          options={speedOptions}
          defaultValue={speedOptions[1]}
          isSearchable={false}
        />
      </div>

      <div className="time-container">
        <div className="result">
          <label className="time-text">placeholder: </label>
        </div>
        <Select
          className="option"
          options={timeOptions}
          defaultValue={timeOptions[0]}
          isSearchable={false}
        />
      </div>
    </div>
  )
}

export default App
