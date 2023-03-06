import React, {useState, useEffect} from 'react';
import Thread from "./Thread";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

function ThreadList(props) {
  const { threadList, token } = props;

  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [tokenError, setTokenError] = useState(null);

  

  const handleMakeApiCall = (subreddit) => {
    if (token == null) {
      setTokenError("Authentication Token missing or undefined")
      return
    }
    
    fetch(`https://oauth.reddit.com/r/${subreddit}/about`, { headers: {Authorization: `Bearer ${token}`}})
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
      } else {
        return response.json()
      }
    })
    .then((jsonifiedResponse) => {
      setData(prevArray  => [...prevArray, jsonifiedResponse.data])
    })
    .catch((error) => {
      setError(error.message)
    });
  }

  const apiCallLoop = (subredditList) => {
    if (data.length == threadList.length) {
      setData([])
    }
    subredditList.forEach(sub => {
      handleMakeApiCall(sub.displayName);
    });
  }

  // useState(apiCallLoop(props.threadList), [])

  if (tokenError) {
    return (
    <>
      <h1>Authentication Error: {tokenError}</h1>;
    </>
    )
  } else if (error) {
    return (
      <>
        <h1>API Error: {error}</h1>;
        <button onClick={() => apiCallLoop(props.threadList)}>Refresh API Call</button>
      </>
    );
  } else {
    return (
      <React.Fragment>
        <button onClick={() => apiCallLoop(props.threadList)}>Refresh API Call</button>
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

}

ThreadList.propTypes = {
  threadList: PropTypes.array,
  token: PropTypes.string,
};

export default ThreadList;