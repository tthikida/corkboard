import React from "react";
import LoginForm from "./LoginForm";
import Homepage from "./Homepage";
import {useState} from "react";

var loginBool = false;
function Login(){
    
    const [isLoggedIn, setLoggedIn] = useState(false)
    
    function LogRegButton() {
        setLoggedIn(!isLoggedIn);
        console.log("button pressed");
    }

    
    return (
        <div className={"login"}>
            <button 
                type={"button"}
                onClick={LogRegButton} 
                
            > Login/Register </button>
            {isLoggedIn ? <Homepage /> : <LoginForm />}
        </div>
    )
}
export default Login;