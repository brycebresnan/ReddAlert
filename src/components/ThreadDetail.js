import React from "react";
import PropTypes from "prop-types";

function ThreadDetail(props) {
  const {thread, onClickingEdit, onClickingDelete } = props;

  let isItHot = "No";

  if (thread.isHot) {
    isItHot = "Yes"
  } 

  return(
    <>
      <h2>Details: </h2>
      <h3>{thread.error}</h3>
      <h3>Subreddit name: {thread.displayName} </h3>
      <h3>Members: {thread.subscribers}</h3>
      <h3>Online: {thread.accountsActive}</h3>
      <h3>Set Threshold: {thread.scoreThreshold}</h3>
      <h3>Active Score: {thread.activeScore.toFixed(1)} </h3>
      <h3>Is it Hot? {isItHot} </h3>

      <button onClick={onClickingEdit}>Settings</button>
      <button onClick={() => onClickingDelete(thread.id)}>Delete</button>
    </>
  )
}

ThreadDetail.propTypes = {
  thread: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func 
};

export default ThreadDetail;