import React, {useState, useEffect} from 'react';
import Thread from "./Thread";
import PropTypes from "prop-types";
import { Section, Tile, Box, Container } from 'react-bulma-components';


function ThreadList(props) {
  const { threadList, onThreadSelection } = props;
    return (
      <React.Fragment>
        <Container>
          <Tile kind="ancestor">
            <Tile >
              {threadList.map((thread,index) =>
                <Tile key={index} kind='parent'>
                  {/* <Tile type='child' > */}
                    <Thread 
                    whenThreadSelected={onThreadSelection}
                    displayName={thread.displayName}
                    accountsActive={thread.accountsActive}
                    subscribers={thread.subscribers}
                    activeScore={thread.activeScore}
                    isHot={thread.isHot}
                    id={thread.id}
                    key={thread.id}/>
                  {/* </Tile> */}
                </Tile>
              )}
            </Tile>
          </Tile>
        </Container>
      </React.Fragment>
    );
  }



ThreadList.propTypes = {
  threadList: PropTypes.array,
  onThreadSelection: PropTypes.func
};

export default ThreadList;