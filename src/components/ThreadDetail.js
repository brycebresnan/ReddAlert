import React from "react";
import PropTypes from "prop-types";

function ThreadDetail(props) {
  const {thread} = props;

  return(
    <>
      <h1>Thread Detail</h1>
      <h3>Subreddit name: {thread.displayName} </h3>
      <h3>Members: {thread.subscribers}</h3>
      <h3>Online: {thread.accountsActive}</h3>
      <h4>Active Score: {thread.activeScore} </h4>
      <button onClcik={onClickingThreadSettings}>Settings</button>
      <button onClick={() => onClickingDelete(thread.id)}>Delete</button>
    </>
  )
}

ThreadDetail.propTypes = {
  thread: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingThreadSettings: PropTypes.func 
};

export default ThreadDetail;