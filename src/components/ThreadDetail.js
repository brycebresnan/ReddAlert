import React from "react";
import PropTypes from "prop-types";

function ThreadDetail(props) {
  const {displayName, subscribers, accountsActive, activeScore, isHot, id } = props;

  return(
    <>
      <h3>Subreddit name: {displayName} </h3>
      <h3>Members: {subscribers}</h3>
      <h3>Online: {accountsActive}</h3>
      <h4>Active Score: {activeScore.toFixed(1)} </h4>
      <h4>Is it Hot? {isHot}</h4>
      <button onClcik={onClickingThreadSettings}>Settings</button>
      <button onClick={() => onClickingDelete(id)}>Delete</button>
    </>
  )
}

ThreadDetail.propTypes = {
  displayName: PropTypes.string,
  subscribers: PropTypes.number,
  accountsActive: PropTypes.number,
  activeScore: PropTypes.number,
  isHot: PropTypes.bool,
  id: PropTypes.string,
  onClickingDelete: PropTypes.func,
  onClickingThreadSettings: PropTypes.func 
};

export default ThreadDetail;