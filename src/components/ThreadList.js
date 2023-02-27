import React from "react";
import Thread from "./Thread";
import PropTypes from "prop-types";

function ThreadList(props) {

  return (
    <React.Fragment>
      {props.threadList.map((thread) => 
        <Thread displayName={thread.displayName}
          accountsActive={thread.accountsActive}
          subscribers={thread.subscribers}
          id={thread.id}
          key={thread.id}/>
        )}
    </React.Fragment>

  );
}

ThreadList.propTypes = {
  threadList: PropTypes.array
};

export default ThreadList;