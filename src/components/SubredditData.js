import React, { useEffect, useState } from 'react';

function SubredditData() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);


  useEffect(() => {
    fetch('https://oauth.reddit.com/r/cats/about', { headers: {Authorization: 'bearer -Q6ofIZkSyHfz4JMCfQ5zm-PdLJ7vvA'}})
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
}, [])

  if (error) {
    return <h1>Error: {error}</h1>;
  } else if (!isLoaded) {
    return <h1>...Loading...</h1>;
  } else {
    console.log(data)
    console.log(data["accounts_active"])
    return (
      <React.Fragment>
        <h1>{data["display_name"]}</h1>
        <h3>Accounts Active: {data["accounts_active"]}</h3>
        <h3>Subscribers: {data["subscribers"]}</h3>
      </React.Fragment>
    );
  }

}

export default SubredditData;