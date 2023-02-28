export async function getAuthToken() {
  await fetch(`https://www.reddit.com/api/v1/access_token`, {
    method:"POST",
    headers: {
    'Authorization': `${REACT_APP_API_KEY}`,
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
      return jsonifiedResponse
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