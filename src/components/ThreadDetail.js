import React from "react";
import PropTypes from "prop-types";
import { Box, Block, Content} from "react-bulma-components";

function ThreadDetail(props) {
  const {thread, onClickingEdit, onClickingDelete } = props;

  return(
    <>
    <Box>
      <Block>
        <Content>
          <h3>Details: </h3>
          <p>{thread.error}</p>
          <p>Subreddit name: {thread.displayName} </p>
          <p>Members: {thread.subscribers}</p>
          <p>Online: {thread.accountsActive}</p>
          <p>Set Threshold: {thread.scoreThreshold}</p>
          <p>Active Score: {thread.activeScore.toFixed(1)} </p>
          <p>Is it Hot? {thread.isHot ? "Yes" : "No"} </p>
        </Content>
      </Block>

      <button onClick={onClickingEdit}>Edit Settings</button>
      <button onClick={() => onClickingDelete(thread.displayName, thread.id)}>Delete</button>
      </Box>
    </>
  )
}

ThreadDetail.propTypes = {
  thread: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func 
};

export default ThreadDetail;