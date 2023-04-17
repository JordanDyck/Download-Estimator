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
  const [download, setDownload] = useState({speed: 0, size: 0})
  const [estimate, setEstimate] = useState()
  const [downloadTime, setDownloadTime] = useState({time: "Hours"})
  const [downloadType, setDownloadType] = useState({speed: "MB", size: "GB"})

  const calcSpeed = (speed) => {
    return (
      speed *
      (downloadType.speed === "MB" ? 1024 : 1) *
      (downloadType.speed === "GB" ? 1024 * 1024 : 1)
    )
  }

  const calcSize = (size) => {
    return (
      size *
      (downloadType.size === "MB" ? 1024 : 1) *
      (downloadType.size === "GB" ? 1024 * 1024 : 1)
    )
  }

  const timeLength = () => {
    return calcSize(download.size) / calcSpeed(download.speed)
  }

  const calcTime = (time) => {
    return (
      time /
      (downloadTime.time === "Mins" ? 60 : 1) /
      (downloadTime.time === "Hours" ? 60 * 60 : 1) /
      (downloadTime.time === "Days" ? 60 * 60 * 24 : 1)
    )
  }

  // total time to download.
  const calculate = () => {
    const time = calcTime(timeLength()).toFixed(2)
    setEstimate(time)
  }
  return (
    <div className="wrapper">
      <header className="title"> How Long To Download</header>
      <div className="size-container">
        <input
          className="size-input"
          type="number"
          placeholder="Download Size..."
          onChange={(e) =>
            setDownload((curr) => ({
              ...curr,
              size: e.target.value,
            }))
          }
        />
        <Select
          className="option"
          options={speedOptions}
          defaultValue={speedOptions[0]}
          isSearchable={false}
          onChange={(e) =>
            setDownloadType((curr) => ({
              ...curr,
              size: e.value,
            }))
          }
        />
      </div>

      <div className="speed-container">
        <input
          className="speed-input"
          type="number"
          placeholder="Download speed..."
          onChange={(e) =>
            setDownload((curr) => ({
              ...curr,
              speed: e.target.value,
            }))
          }
        />
        <Select
          className="option"
          options={speedOptions}
          defaultValue={speedOptions[1]}
          isSearchable={false}
          onChange={(e) =>
            setDownloadType((curr) => ({
              ...curr,
              speed: e.value,
            }))
          }
        />
      </div>

      <div className="time-container">
        <div className="result">
          <label className="time-text">{estimate}</label>
        </div>
        <Select
          className="option"
          options={timeOptions}
          defaultValue={timeOptions[2]}
          isSearchable={false}
          onChange={(e) =>
            setDownloadTime((curr) => ({
              ...curr,
              time: e.value,
            }))
          }
        />
      </div>
      <button onClick={() => calculate()}>calculate</button>
    </div>
  )
}

export default App
