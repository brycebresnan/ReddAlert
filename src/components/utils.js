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
