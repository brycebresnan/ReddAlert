import React, {useState, useEffect} from 'react';
import Thread from "./Thread";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

function ThreadList(props) {
  const { threadList } = props;

    return (
      <React.Fragment>
          {threadList.map((thread) =>
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
  threadList: PropTypes.array,
  token: PropTypes.string,
};

export default ThreadList;