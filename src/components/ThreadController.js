import ThreadList from "./ThreadList"
import React from 'react';
import NewThreadForm from "./NewThreadForm";

class ThreadController extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      formVisibleOnPage: false,
      mainThreadList: []
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render(){
    let currentlyVisisbleState = null;
    let buttonText = null;

    if (this.state.formVisibleOnPage) {
      currentlyVisisbleState = <NewThreadForm />
      buttonText = "Return to Thread List"
    } else {
      currentlyVisisbleState = <ThreadList threadList={this.state.mainThreadList} />
      buttonText = "Add Thread"
    }
  
    return(
      <React.Fragment>
        {currentlyVisisbleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default ThreadController;