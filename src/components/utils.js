export function encodeKey() {
  return btoa(`${process.env.REACT_APP_APP_ID}:${process.env.REACT_APP_SECRET}`)
}

export async function getAuthToken(encodedKey) {
  
  return (
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
  );
}


// export async function apiCaller(subreddit, token) {
//   if (token == null) {
//     return "Please update Authentication token"
//   }

//   return (
//     fetch(`https://oauth.reddit.com/r/${subreddit}/about`, { headers: {Authorization: `bearer ${token}`}})
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`${response.status}: ${response.statusText}`);
//       } else {
//         return response.json()
//       }
//     })
//   );  
// }