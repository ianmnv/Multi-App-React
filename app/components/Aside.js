import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Aside() {
  return (
    <div id="aside">
      <Link to="/">Home</Link>
      <Link to="/clock">Clock</Link>
      <Link to="/toDos">To do list</Link>
    </div>
  );
}

export default Aside;
