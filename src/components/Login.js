import React from "react";
import Homepage from "./Homepage"

var b = false;

function Login(){
    return (
        <div className={"loginContainer"}>
            <form className={"loginForm"}>
                <input type={"text"} placeholder={"Username"}/>
                <input type={"password"} placeholder={"password"}/>
                <button type={"submit"}><h1>Login</h1></button>
            </form>
        </div>
    );
}

export default Login;