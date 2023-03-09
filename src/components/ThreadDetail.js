import React from "react";
import PropTypes from "prop-types";

function ThreadDetail(props) {
  const {thread, onClickingEdit, onClickingDelete } = props;

  return(
    <>
      <h2>Details: </h2>
      <h3>{thread.error}</h3>
      <h3>Subreddit name: {thread.displayName} </h3>
      <h3>Members: {thread.subscribers}</h3>
      <h3>Online: {thread.accountsActive}</h3>
      <h3>Set Threshold: {thread.scoreThreshold}</h3>
      <h3>Active Score: {thread.activeScore.toFixed(1)} </h3>
      <h3>Is it Hot? {thread.isHot ? "Yes" : "No"} </h3>

      <button onClick={onClickingEdit}>Edit Settings</button>
      <button onClick={() => onClickingDelete(thread.displayName, thread.id)}>Delete</button>
    </>
  )
}

ThreadDetail.propTypes = {
  thread: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func 
};

export default ThreadDetail;