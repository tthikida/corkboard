import React from "react";
import Homepage from "./Homepage"
import LoginForm from "./LoginForm";


var isUserRegistered = false;

function Login(){
    return (
        <div className={"login"}>
            <LoginForm isRegistered={isUserRegistered}/>
        </div>
    )
}
export default Login;