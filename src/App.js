import {useState} from "react"
import Select from "react-select"

import "./App.scss"

const speedOptions = [
  {value: "GB", label: "GB"},
  {value: "MB", label: "MB"},
  {value: "KB", label: "KB"},
]

function App() {
  const [download, setDownload] = useState({speed: 0, size: 0})
  const [estimate, setEstimate] = useState()
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
    let hours = Math.floor(time / 3600)
    let minutes = Math.floor((time - hours * 3600) / 60)
    let seconds = Math.floor(time - hours * 3600 - minutes * 60)

    return {
      seconds,
      minutes,
      hours,
    }
  }

  // total time to download.
  const calculate = () => {
    const time = calcTime(timeLength())
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
          <label className="time-text">{`Hrs: ${estimate?.hours} / Mins: ${estimate?.minutes} / sec: ${estimate?.seconds}`}</label>
        </div>
      </div>
      <button onClick={() => calculate()}>calculate</button>
    </div>
  )
}

export default App
