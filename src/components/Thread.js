import React from "react";
import PropTypes from "prop-types";
import {GiSiren} from "react-icons/gi" 
import { Content, Tile, Box } from "react-bulma-components";




function Thread(props) {
  const {displayName, subscribers, accountsActive, activeScore, isHot, id, whenThreadSelected} = props;


  return(
    <React.Fragment> 
      <div onClick = {() => whenThreadSelected(id)}>
        <Tile >
          <Box>
            <Content>
              <h4>{displayName}  {isHot ? <GiSiren />: null }</h4>
              <p>Members: {subscribers}</p>
              <p>Online: {accountsActive}</p>
              <h6>Active Score: {activeScore.toFixed(1)}</h6>    
            </Content>
          </Box>
        </Tile>
      </div>
    </React.Fragment>
  );
}

Thread.propTypes = {
  displayName: PropTypes.string,
  subscribers: PropTypes.number,
  accountsActive: PropTypes.number,
  activeScore: PropTypes.number,
  isHot: PropTypes.bool,
  id: PropTypes.string,
  whenThreadSelected: PropTypes.func
}

export default Thread;