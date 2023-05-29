import React from "react";
import Homepage from "./Homepage"
import Login from "./Login";
import Register from "./Register";


var isUserRegistered = false;

function Doorman(){
    return isUserRegistered ? (<Login />) : (<Register />)
}
export default Doorman;