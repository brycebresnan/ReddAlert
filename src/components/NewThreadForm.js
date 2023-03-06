import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewThreadForm(props){

  function handleNewThreadFormSubmission(event) {
    event.preventDefault();
    props.onNewThreadCreation({
      displayName: event.target.subredditName.value,
      accountsActive: null,
      subcribers: null,
      activeScore: null,
      scoreThreshold: parseInt(event.target.threshold.value),
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewThreadFormSubmission}>
        <label>
          Subreddit Name: <input
            type='text'
            name='subredditName'
            required />
        </label>
        <br></br>
        <label>
          Active Threshold: <input
            type='text'
            name='threshold'
            defaultValue="30" 
            required />  *Default is 30
        </label>    
        <button type='submit'>Add Subreddit</button>
      </form>
    </React.Fragment>
  );
}

NewThreadForm.propTypes = {
  onNewThreadCreation: PropTypes.func
};

export default NewThreadForm;