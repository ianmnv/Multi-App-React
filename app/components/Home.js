import React, { useEffect } from "react";

// My components
import Container from "./Container";

function Home() {
  return (
    <Container title="Home">
      <div id="home-cont">
        <p>
          Welcome to the multi-app! You can find small apps to help you with the
          every-day needs.
          <br />
          On the aside bar, you can find all the mini-apps there are available
          right now. Enjoy! ;)
        </p>
        <footer>
          <span>
            Created by <b>Ian M. Nava G.</b>
          </span>
        </footer>
      </div>
    </Container>
  );
}

export default Home;
