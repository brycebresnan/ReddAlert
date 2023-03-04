import React, { useEffect, useState } from 'react';
import * as u from './utils'

function SubredditData() {
  const [error, setError] = useState(null);
  const [tokenError, setTokenError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [token, setToken] = useState(null)

  const subreddit = "cringe"

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

const handleMakeApiCallButton = (subreddit) => {
  fetch(`https://oauth.reddit.com/r/${subreddit}/about`, { headers: {Authorization: `Bearer ${token}`}})
  .then(response => {
    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    } else {
      return response.json()
    }
  })
  .then((jsonifiedResponse) => {
      setData(jsonifiedResponse.data)
      setIsLoaded(true)
  })
  .catch((error) => {
    setError(error.message)
    setIsLoaded(true)
  });
}

  // if (error) {
  //   return <h1>Error: {error}</h1>;
  // } else if (!isLoaded) {
  //   return <h1>...Loading...</h1>;
  // } else {
    return (
      <React.Fragment>
        <button onClick={() => handleMakeApiCallButton(subreddit)}>Refresh API Call</button>
        <h1>{data["display_name"]}</h1>
        <h3>Accounts Active: {data["accounts_active"]}</h3>
        <h3>Subscribers: {data["subscribers"]}</h3>
      </React.Fragment>
    );
  }

export default SubredditData;