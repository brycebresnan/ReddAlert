import React from "react";
import PropTypes from "prop-types";


function Thread(props) {
  const activePercent = props.accountsActive / props.subscribers
  return (
    <React.Fragment>
      <h3>Subreddit name: {props.displayName} </h3>
      <h3>Members: {props.subscribers}</h3>
      <h3>Online: {props.accountsActive}</h3>
      <h4>Active: {activePercent}% </h4>
    </React.Fragment>
  );
}

Thread.propTypes = {
  displayName: PropTypes.string,
  subscribers: PropTypes.number,
  accountsActive: PropTypes.number,
  id: PropTypes.string
}

export default Thread;