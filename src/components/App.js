import React from "react";
import Header from "./Header";
import ThreadController from "./ThreadController";
import SubredditData from "./SubredditData";

function App() {
  return (
    <React.Fragment>
      <Header />
      <SubredditData />
      <ThreadController />
    </React.Fragment>
  );
}

export default App;
