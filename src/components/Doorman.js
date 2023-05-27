import React from "react";
import Homepage from "./Homepage"
import Login from "./Login";


var b = false;

function Doorman(){
    if (b) { return <Homepage /> }
    else   { return <Login />    }
}
export default Doorman;