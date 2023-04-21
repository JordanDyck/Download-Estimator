import Select from "react-select"

const speedOptions = [
  {value: "GB", label: "GB"},
  {value: "MB", label: "MB"},
  {value: "KB", label: "KB"},
]

const Estimator = ({setDownload, setDownloadType, calculate, estimate}) => {
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
              size: e.target.value,
            }))
          }
        />
        <Select
          className="dropdown-menu"
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
          className="dropdown-menu"
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
          <label className="time-text">
            {estimate?.hours ? `${estimate.hours}h.` : "0h."}
          </label>
          <label className="time-text">
            {estimate?.minutes ? `${estimate?.minutes}m.` : "0m."}
          </label>
          <label className="time-text">
            {estimate?.seconds ? `${estimate?.seconds}s.` : "0s."}
          </label>
        </div>
      </div>
      <button className="calc-btn" onClick={() => calculate()}>
        Calculate
      </button>
    </div>
  )
}
export default Estimator
