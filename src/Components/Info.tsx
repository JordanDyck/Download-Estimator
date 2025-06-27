const Info = () => {
  return (
    <div className="info-wrapper">
      <h3>How does it work?</h3>

      <p>
        First you need to figure out the <span> Speed </span>and
        <span> Size</span> of the file,
        <span> Kilobyte(KB), Megabyte(MB), Gigabyte(GB). </span>
        Each one is 1024 more than the last, starting with Bytes.
        <span> 1KB = 1024B, | 1MB = 1024KB, | 1GB = 1024MB.</span>
      </p>
      <br />
      <p>
        To calculate the total time it would take to download, you just divide the
        <span> Size </span>
        by your<span> Bandwidth</span>. Ex. 50GB / 10MB/s = 5,120.
      </p>
      <br />
      <p>
        To make that time more readable, we need to split it up into Seconds, Minutes, and Hours. To
        do this we just take the total time (5,120) and divide it by <span> 3600</span> to convert
        it to <span>Hours(1)</span>. Then we do (time - hours x 3600) / 60 to get the
        <span> Minutes(25)</span>. Then (time - hours x 3600 - minutes x 60) to get the{" "}
        <span> Seconds(20)</span>.
      </p>
      <br />
    </div>
  )
}
export default Info
