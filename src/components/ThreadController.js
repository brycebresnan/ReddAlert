import ThreadList from "./ThreadList"
import Thread from "./Thread";
import React from 'react';

class ThreadController extends React.Component {

  constructor(props) {
    super(props)
    this.state = {};
  }

  render(){
    return(
      <React.Fragment>
        <ThreadList />
      </React.Fragment>
    );
  }
}

export default ThreadController;