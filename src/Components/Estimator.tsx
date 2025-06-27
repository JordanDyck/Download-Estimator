import Select from "react-select"
import type {EstimateType, TypeProps} from "../App"

const sizeOptions = [
  {value: "GB", label: "GB"},
  {value: "MB", label: "MB"},
  {value: "KB", label: "KB"},
]
const speedOptions = [
  {value: "GB/s", label: "GB/s"},
  {value: "MB/s", label: "MB/s"},
  {value: "KB/s", label: "KB/s"},
]

interface Props {
  download: {
    speed: number
    size: number
  }
  setDownload: React.Dispatch<
    React.SetStateAction<{
      speed: number
      size: number
    }>
  >
  setDownloadType: React.Dispatch<React.SetStateAction<TypeProps>>
  calculate: () => void
  estimate: EstimateType
}

const Estimator = ({download, setDownload, setDownloadType, calculate, estimate}: Props) => {
  return (
    <div className="wrapper">
      <div className="title-container">
        <header className="title"> How Long To Download</header>
      </div>
      <div className="size-container">
        <input
          className="size-input"
          type="number"
          placeholder="Download Size..."
          onChange={(e) =>
            setDownload((curr) => ({
              ...curr,
              size: +e.target.value,
            }))
          }
        />
        <Select
          className="dropdown-menu"
          options={sizeOptions}
          defaultValue={sizeOptions[0]}
          isSearchable={false}
          onChange={(e) => {
            setDownloadType(
              (curr) =>
                ({
                  ...curr,
                  size: e?.value,
                } as TypeProps)
            )
          }}
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
              speed: +e.target.value,
            }))
          }
        />
        <Select
          className="dropdown-menu"
          options={speedOptions}
          defaultValue={speedOptions[1]}
          isSearchable={false}
          onChange={(e) =>
            setDownloadType(
              (curr) =>
                ({
                  ...curr,
                  speed: e?.value,
                } as TypeProps)
            )
          }
        />
      </div>

      <div className="time-container">
        <div className="result">
          <label className="time-text">{`${estimate?.hours || 0}h :`}</label>
          <label className="time-text">{`${estimate?.minutes || 0}m :`}</label>
          <label className="time-text">{`${estimate?.seconds || 0}s`}</label>
        </div>
      </div>
      <button
        className="calc-btn"
        disabled={download.size === 0 || download.speed === 0}
        onClick={() => calculate()}
      >
        Calculate
      </button>
    </div>
  )
}
export default Estimator
