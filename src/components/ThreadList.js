import React, {useState, useEffect} from 'react';
import Thread from "./Thread";
import PropTypes from "prop-types";

function ThreadList(props) {
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useState(apiCallLoop(props.threadList), [])

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
      handleMakeApiCall(sub);
    });
  }

  if (error) {
    return <h1>API Error: {error}</h1>;
  } else {
    return (
      <React.Fragment>
        <button onClick={() => apiCallLoop(threadList)}>Refresh API Call</button>
          {data.map((thread, index) =>
            <Thread displayName={thread.display_name}
            accountsActive={thread.accounts_active}
            subscribers={thread.subscribers}
            id={index}
            key={index}/>
          )}
      </React.Fragment>
    );
  }

  // return (
  //   <React.Fragment>
  //     {props.threadList.map((thread) => 
  //       <Thread displayName={thread.displayName}
  //         accountsActive={thread.accountsActive}
  //         subscribers={thread.subscribers}
  //         id={thread.id}
  //         key={thread.id}/>
  //       )}
  //   </React.Fragment>

  // );
}

ThreadList.propTypes = {
  threadList: PropTypes.array
};

export default ThreadList;