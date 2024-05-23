import React, { useEffect } from "react";

import Container from "./Container";

function ToDos() {
  return (
    <Container title="To do list">
      <form action="">
        <input type="text" placeholder="Task of the day" />
        <button className="todo_btn">Save item</button>
      </form>
    </Container>
  );
}

export default ToDos;
