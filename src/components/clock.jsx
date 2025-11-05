import React, { useEffect, useState } from "react";

const Clock = () => {
  const [clock, setClock] = useState(Date.now());
  useEffect(() => {
    const interval = setInterval(() => {
      setClock(Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, [clock]);
  return (
    <>
      <h1>Clock</h1>
      <div>{new Date(clock).toLocaleTimeString()}</div>
    </>
  );
};

export default Clock;
