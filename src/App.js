import {useState} from "react"

import "./App.scss"
import Estimator from "./Components/Estimator"
import Info from "./Components/Info"

function App() {
  const [download, setDownload] = useState({speed: 0, size: 0})
  const [estimate, setEstimate] = useState()
  const [downloadType, setDownloadType] = useState({speed: "MB/s", size: "GB"})

  const calcSpeed = (speed) => {
    return (
      speed *
      (downloadType.speed === "MB/s" ? 1024 : 1) *
      (downloadType.speed === "GB/s" ? 1024 * 1024 : 1)
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
    <div className="App">
      <Estimator
        download={download}
        setDownload={setDownload}
        setDownloadType={setDownloadType}
        calculate={calculate}
        estimate={estimate}
      />
      <Info />
    </div>
  )
}

export default App
