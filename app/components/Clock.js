import React, { useEffect, useState } from "react";

import Container from "./Container";

function Clock() {
  const [currentTime, setTime] = useState(
    new Intl.DateTimeFormat(navigator.language, {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    }).format(new Date())
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Intl.DateTimeFormat(navigator.language, {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
        }).format(new Date())
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container title="Time" type="true">
      <div>
        <h1 className="time-title">The current time is:</h1>
        <span className="actual-time">{currentTime}</span>
      </div>
    </Container>
  );
}

export default Clock;
