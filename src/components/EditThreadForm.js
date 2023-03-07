import React from "react";
import PropTypes from "prop-types";

function EditThreadForm(props){
  const {thread, onEditThread } = props;
  // const prevName = thread.displayName;

  function handleEditThreadFormSubmission(event) {
    event.preventDefault();
    onEditThread({
      displayName: event.target.subredditName.value,
      accountsActive: null,
      subscribers: null,
      activeScore: null,
      scoreThreshold: parseInt(event.target.threshold.value),
      isHot: false,
      id: thread.id
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleEditThreadFormSubmission}>
        <label>
          Subreddit Name: <input
            type='text'
            name='subredditName'
            defaultValue={thread.displayName} 
            required />
        </label>
        <br></br>
        <label>
          Active Threshold: <input
            type='text'
            name='threshold'
            defaultValue={thread.scoreThreshold}  
            required /> 
        </label>    
        <button type='submit'>Update</button>
      </form>
    </React.Fragment>
  );
}

EditThreadForm.propTypes = {
  onEditThread: PropTypes.func,
  thread: PropTypes.object
};

export default EditThreadForm;