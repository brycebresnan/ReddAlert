export async function getAuthToken() {
  const encodedKey = btoa(`${REACT_APP_APP_ID}:${REACT_APP_SECRET}`)

  await fetch(`https://www.reddit.com/api/v1/access_token`, {
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
      return jsonifiedResponse.access_token
    })
  .catch((error) => {
    return error.message
  });
}


export async function apiCaller(subreddit, token) {
  if (token == null) {
    return "Please update Authentication token"
  }
  await fetch(`https://oauth.reddit.com/r/${subreddit}/about`, { headers: {Authorization: `bearer ${token}`}})
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