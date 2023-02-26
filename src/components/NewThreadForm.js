import React from "react";

function NewThreadForm(){

  function handleNewThreadFormSubmission(event) {
    event.preventDetault();
    
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewThreadFormSubmission}>
        <input
          type='text'
          name='subredditName'
          placeholder='Name of Subreddit...' />
        <button type='submit'>Add Subreddit</button>
      </form>
    </React.Fragment>
  );
}

export default NewThreadForm;