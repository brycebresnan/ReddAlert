import React from "react";
import { AiOutlineAlert } from "react-icons/ai";
import {GiSiren} from "react-icons/gi" 

function Header(){
  return(
    <React.Fragment>
      <h1>ReddAlert<GiSiren/></h1>
    </React.Fragment>
  );
}

export default Header;