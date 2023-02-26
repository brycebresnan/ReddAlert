import React from "react";
import Thread from "./Thread";
import PropTypes from "react";

function ThreadList(props) {

  return (
    <React.Fragment>
    {props.threadList.map((thread, index) => 
      <Thread displayName={thread.displayName}
      accountsActive={thread.accountsActive}
      subscribers={thread.subscribers}
      key={index} />
      )}
    </React.Fragment>

  );
}

ThreadList.propTypes = {
  threadList: PropTypes.array
};

export default ThreadList;