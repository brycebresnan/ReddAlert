import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import { Form, Box} from "react-bulma-components";


function NewThreadForm(props){

  function handleNewThreadFormSubmission(event) {
    event.preventDefault();
    props.onNewThreadCreation({
      displayName: event.target.subredditName.value,
      accountsActive: null,
      subscribers: null,
      activeScore: null,
      scoreThreshold: parseInt(event.target.threshold.value),
      isHot: false,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <Box>
          <form onSubmit={handleNewThreadFormSubmission}>
            <Form.Field>
              <Form.Label>Subreddit Name: </Form.Label>
              <Form.Control>
                <Form.Input
                  name='subredditName'
                  required
                />
              </Form.Control>
            </Form.Field>

            <Form.Field>
              <Form.Label>Active Threshold: </Form.Label>
              <Form.Control>
                <Form.Input
                  name='threshold'
                  defaultValue='20'
                  required
                />
              </Form.Control>
              <p>*Default is 20</p>
            </Form.Field>
            <br></br>    
            <button type='submit'>Add Subreddit</button>
          </form>
      </Box>
    </React.Fragment>
  );
}

NewThreadForm.propTypes = {
  onNewThreadCreation: PropTypes.func
};

export default NewThreadForm;