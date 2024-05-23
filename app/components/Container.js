import React, { useEffect } from "react";

function Container(props) {
  useEffect(() => {
    document.title = `Multi-App | ${props.title}`;
  }, []);

  return (
    <div className={`container ` + `${props.type ? "align-clock" : ""}`}>
      {props.children}
    </div>
  );
}

export default Container;
