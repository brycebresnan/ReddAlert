import ThreadList from "./ThreadList"
import React, {useState, useEffect} from 'react';
import NewThreadForm from "./NewThreadForm";
import EditThreadForm from "./EditThreadForm";
import ThreadDetail from "./ThreadDetail";
import * as util from "./utils";

function ThreadController() {

  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainThreadList, setMainThreadList] = useState([]);
  const [token, setToken] = useState(null);
  const [tokenError, setTokenError] = useState(null);
  const [apiError, setApiError] = useState(null);
  const [editing, setEditing] = useState(false);
  const [selectedThread, setSelectedThread] = useState(null);
  const [timer, setTimer] = useState(false);
  const [invervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (token == null) {
      handleGetAuthToken()
    }
  },[])

  const handleGetAuthToken = () => {
    // const encodedKey = btoa(`${process.env.REACT_APP_APP_ID}:${process.env.REACT_APP_SECRET}`)
    const encodedKey = util.encodeKey();

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
  } 

  const handleTimer = () => {
    const timerInverval = setInterval(handleUpdateThreads, 5000)
    setIntervalId(timerInverval)
  }

  const handleClick = () => {
    if (selectedThread != null) {
      setFormVisibleOnPage(false)
      setSelectedThread(null)
    } else {
    setFormVisibleOnPage(!formVisibleOnPage)
    }
    };

  const handleAddingNewThreadToList = (newThread) => {
    let newThreadObj = newThread;

    if (token == null) {
      setTokenError("Authentication Token missing or undefined")
      return
    }
    
    fetch(`https://oauth.reddit.com/r/${newThreadObj.displayName}/about`, { headers: {Authorization: `Bearer ${token}`}})
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
      } else {
        return response.json()
      }
    })
    .then((jsonifiedResponse) => {
      let calcActiveScore = (jsonifiedResponse.data.accounts_active / jsonifiedResponse.data.subscribers) * 10000;
      newThreadObj.accountsActive = jsonifiedResponse.data.accounts_active;
      newThreadObj.displayName = jsonifiedResponse.data.display_name;
      newThreadObj.subscribers = jsonifiedResponse.data.subscribers;
      newThreadObj.activeScore = calcActiveScore;
      if (calcActiveScore >= newThread.scoreThreshold){
        newThreadObj.isHot = true;
      }
      const newMainThreadList = mainThreadList.concat(newThreadObj); 
      setMainThreadList(newMainThreadList);
      setFormVisibleOnPage(false);
    })
    .catch((error) => {
      setApiError(error.message)
      newThreadObj.error = error.message
      const newMainThreadList = mainThreadList.concat(newThreadObj); 
      setMainThreadList(newMainThreadList);
      setFormVisibleOnPage(false);
    });
  }

  const handleEditClick = () => {
    setEditing(true);
  }

  const handleEditThread = (threadEdit) => {
    let newThreadObj = threadEdit;

    if (token == null) {
      setTokenError("Authentication Token missing or undefined")
      return
    }
    
    fetch(`https://oauth.reddit.com/r/${newThreadObj.displayName}/about`, { headers: {Authorization: `Bearer ${token}`}})
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
      } else {
        return response.json()
      }
    })
    .then((jsonifiedResponse) => {
      let calcActiveScore = (jsonifiedResponse.data.accounts_active / jsonifiedResponse.data.subscribers) * 10000;
      newThreadObj.accountsActive = jsonifiedResponse.data.accounts_active;
      newThreadObj.displayName = jsonifiedResponse.data.display_name;
      newThreadObj.subscribers = jsonifiedResponse.data.subscribers;
      newThreadObj.activeScore = calcActiveScore;
      if (calcActiveScore >= threadEdit.scoreThreshold){
        newThreadObj.isHot = true;
      }
      
      const newMainThreadList = mainThreadList
      .filter(thread => thread.id !== newThreadObj.id)
      .concat(newThreadObj); 
      setMainThreadList(newMainThreadList);
    })
    .catch((error) => {
      setApiError(error.message)
      newThreadObj.error = error.message
      const newMainThreadList = mainThreadList
      .filter(thread => thread.id !== newThreadObj.id)
      .concat(newThreadObj); 
      setMainThreadList(newMainThreadList);
    });

    setSelectedThread(null);
    setFormVisibleOnPage(false);
    setEditing(false)    
  }

  const handleSelectingThread = (id) => {
    const selectedThread = mainThreadList.filter(thread => thread.id === id)[0];
    setSelectedThread(selectedThread)
  }

  const handleDeleteThread = (threadName, id) => {
    if (confirm(`Are you sure you want to delete ${threadName}?`)) {
      const updatedThreadList = mainThreadList.filter(thread => thread.id !== id)
      setMainThreadList(updatedThreadList)
      setSelectedThread(null)
      setFormVisibleOnPage(false)
    }
  }

  const handleUpdateThreads = () => {
    console.log('bang')
    if (mainThreadList.length == 0) {
      return
    }

    const threadListClone = mainThreadList
    threadListClone.forEach(thread => {
      handleEditThread(thread);
    });
  }

  const handleTimerClick = () => {
    if (timer == true) {
      setTimer(false);
      clearInterval(invervalId);
    } else {
      setTimer(true);
      handleTimer();
    }
  }

  let currentlyVisibleState = null;
  let buttonText = null;
  let timerStatus = null;

  if (timer) {
    timerStatus = "Timer On"
  } else {
    timerStatus = "Timer Off"
  }

  if (editing) {
    currentlyVisibleState = <EditThreadForm thread={selectedThread} onEditThread={handleEditThread} />
    buttonText = "Return to Thread List";
  } else if (selectedThread != null) {
    currentlyVisibleState = <ThreadDetail
    thread={selectedThread}
    onClickingEdit={handleEditClick} 
    onClickingDelete={handleDeleteThread}/>
    buttonText = "Return to Thread List"
  } else if (formVisibleOnPage) {
    currentlyVisibleState = <NewThreadForm onNewThreadCreation={handleAddingNewThreadToList}/>
    buttonText = "Return to Thread List"
  } else {
    currentlyVisibleState = <ThreadList threadList={mainThreadList} onThreadSelection={handleSelectingThread}/>
    buttonText = "Add Thread"
  }

  return(
    <React.Fragment>
      <button onClick={handleClick}>{buttonText}</button>
      <button onClick={handleUpdateThreads}>Update Threads</button>
      <button onClick={handleTimerClick}>{timerStatus}</button>
      {currentlyVisibleState}
    </React.Fragment>
  );
  
}

export default ThreadController;