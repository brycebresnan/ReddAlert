import ThreadList from "./ThreadList"
import React, {useState, useEffect} from 'react';
import NewThreadForm from "./NewThreadForm";

function ThreadController() {

  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainThreadList, setMainThreadList] = useState([]);
  const [token, setToken] = useState(null);
  const [tokenError, setTokenError] = useState(null);
  

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
  },[])
  

  const handleClick = () => {
    setFormVisibleOnPage(!formVisibleOnPage)
    };


  const handleAddingNewThreadToList = (newThread) => {
    const newMainThreadList = mainThreadList.concat(newThread); 
    setMainThreadList(newMainThreadList);
    setFormVisibleOnPage(false);
  }

  let currentlyVisisbleState = null;
  let buttonText = null;

  if (formVisibleOnPage) {
    currentlyVisisbleState = <NewThreadForm onNewThreadCreation={handleAddingNewThreadToList}/>
    buttonText = "Return to Thread List"
  } else {
    currentlyVisisbleState = <ThreadList threadList={mainThreadList} token={token} />
    buttonText = "Add Thread"
  }

  return(
    <React.Fragment>
      <button onClick={handleClick}>{buttonText}</button>
      {currentlyVisisbleState}
    </React.Fragment>
  );
  
}

export default ThreadController;