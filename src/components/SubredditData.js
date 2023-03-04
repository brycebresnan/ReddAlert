import React, { useEffect, useState } from 'react';
import Thread from './Thread';
import * as u from './utils'

function SubredditData() {
  const [error, setError] = useState(null);
  const [tokenError, setTokenError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [token, setToken] = useState(null)

  const threadList = ["cats", "dogs", "brewing"]

  useEffect(() => {
    const encodedKey = btoa(`${process.env.REACT_APP_APP_ID}:${process.env.REACT_APP_SECRET}`)

    fetch(`https://www.reddit.com/api/v1/access_token`, {
    method:"POST",
    headers: {
    'Authorization': `Basic ${encodedKey}`,
    'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      'grant_type': 'client_credentials'
    })
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
      } else {
        return response.json()
      }
    })
  .then((jsonifiedResponse) => {
    setToken(jsonifiedResponse.access_token)
    })
  .catch((error) => {
    setTokenError(error.message)
  });  
    }, [])

const handleMakeApiCall = (subreddit) => {
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
      setIsLoaded(true)
  })
  .catch((error) => {
    setError(error.message)
    setIsLoaded(true)
  });
}

const apiCallLoop = (subredditList) => {
  subredditList.forEach(sub => {
    handleMakeApiCall(sub);
  });
}

  if (error) {
    return <h1>Error: {error}</h1>;
  } else {
    return (
      <React.Fragment>
        <button onClick={() => apiCallLoop(threadList)}>Refresh API Call</button>
        <ul>
          {data.map((thread, index) => 
            <Thread displayName={thread.display_name}
            accountsActive={thread.accounts_active}
            subscribers={thread.subscribers}
            id={index}
            key={index}/>
          )}
        </ul>
      </React.Fragment>
    );
  }
}

export default SubredditData;