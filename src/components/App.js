import React from "react";
import { Container, Hero } from "react-bulma-components";
import Header from "./Header";
import ThreadController from "./ThreadController";

function App() {
  return (
    <React.Fragment>
      <Container>
        <Header />
        <ThreadController />
      </Container>
    </React.Fragment>
  );
}

export default App;
