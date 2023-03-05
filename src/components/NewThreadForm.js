import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewThreadForm(props){

  function handleNewThreadFormSubmission(event) {
    event.preventDefault();
    props.onNewThreadCreation({
      displayName: event.target.subredditName.value,
      id: v4()
    });
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

NewThreadForm.propTypes = {
  onNewThreadCreation: PropTypes.func
};

export default NewThreadForm;