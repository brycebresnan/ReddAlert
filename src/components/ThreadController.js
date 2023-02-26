import ThreadList from "./ThreadList"
import Thread from "./Thread";
import React from 'react';
import NewThreadForm from "./NewThreadForm";

class ThreadController extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      formVisibleOnPage: false
    };
  }

  render(){
    let currentlyVisisbleState = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisisbleState = <NewThreadForm />
    } else {
      currentlyVisisbleState = <ThreadList />
    }
  
    return(
      <React.Fragment>
        {currentlyVisisbleState}
      </React.Fragment>
    );
  }
}

export default ThreadController;