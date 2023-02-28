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
