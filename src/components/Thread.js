import React from "react";
import PropTypes from "prop-types";
import {GiSiren} from "react-icons/gi" 


function Thread(props) {
  const {displayName, subscribers, accountsActive, activeScore, isHot, id, whenThreadSelected} = props;


  return(
    <React.Fragment>
      <div onClick = {() => whenThreadSelected(id)}>
        <h3>Subreddit name: {displayName} </h3>
        <h3>Members: {subscribers}</h3>
        <h3>Online: {accountsActive}</h3>
        <h4>Active Score: {activeScore.toFixed(1)} {isHot ? <h1><GiSiren /></h1>: null }</h4>
        
      </div>
      <br></br>
    </React.Fragment>
  );
}

Thread.propTypes = {
  displayName: PropTypes.string,
  subscribers: PropTypes.number,
  accountsActive: PropTypes.number,
  activeScore: PropTypes.number,
  isHot: PropTypes.bool,
  id: PropTypes.string,
  whenThreadSelected: PropTypes.func
}

export default Thread;