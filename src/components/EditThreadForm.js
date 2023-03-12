import React from "react";
import PropTypes from "prop-types";
import { Box, Form } from "react-bulma-components";



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
      <Box>
        <form onSubmit={handleEditThreadFormSubmission}>
        <Form.Field>
              <Form.Label>Subreddit Name: </Form.Label>
              <Form.Control>
                <Form.Input
                  name='subredditName'
                  defaultValue={thread.displayName} 
                  required
                />
              </Form.Control>
            </Form.Field>

            <Form.Field>
              <Form.Label>Active Threshold: </Form.Label>
              <Form.Control>
                <Form.Input
                  name='threshold'
                  defaultValue={thread.scoreThreshold}
                  required
                />
              </Form.Control>
            </Form.Field>
            <br></br>    
          {/* <label>
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
          </label>     */}
          <button type='submit'>Update</button>
        </form>
      </Box>
    </React.Fragment>
  );
}

EditThreadForm.propTypes = {
  onEditThread: PropTypes.func,
  thread: PropTypes.object
};

export default EditThreadForm;