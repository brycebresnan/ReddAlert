import React, {useState, useEffect} from 'react';
import Thread from "./Thread";
import PropTypes from "prop-types";

function ThreadList(props) {
  const { threadList, onThreadSelection } = props;

    return (
      <React.Fragment>
          {threadList.map((thread) =>
            <Thread 
            whenThreadSelected={onThreadSelection}
            displayName={thread.displayName}
            accountsActive={thread.accountsActive}
            subscribers={thread.subscribers}
            activeScore={thread.activeScore}
            isHot={thread.isHot}
            id={thread.id}
            key={thread.id}/>
          )}
      </React.Fragment>
    );
  }



ThreadList.propTypes = {
  threadList: PropTypes.array,
  onThreadSelection: PropTypes.func
};

export default ThreadList;