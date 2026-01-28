import { useEffect, useState } from "react";
function DigitalClock() {
  const [time, setTime] = useState(new Date());
  //  useEffect hook
   useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup function
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Live Digital Clock</h1>
      <h2>{time.toLocaleTimeString()}</h2>
    </div>
  );
}

export default DigitalClock;
