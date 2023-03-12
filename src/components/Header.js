import React from "react";
import { AiOutlineAlert } from "react-icons/ai";
import {GiSiren} from "react-icons/gi" 
import { Hero } from "react-bulma-components";

function Header(){
  return(
    <React.Fragment>
      <Hero size="small">
        <Hero.Body>
          <h1>ReddAlert<GiSiren/></h1>
        </Hero.Body>
      </Hero>
    </React.Fragment>
  );
}

export default Header;