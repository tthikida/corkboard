import React from "react";
import Homepage from "./Homepage"
import Input from "./Input"

var b = false;

function Login(){
    return (
        <div className={"loginContainer"}>
            <form className={"loginForm"}>
                <Input 
                    type={"text"}
                    placeholder={"Username"}
                />
                <Input
                    type={"password"}
                    placeholder={"Password"}
                />
                <button type={"submit"}><h1>Login</h1></button>
            </form>
        </div>
    );
}

export default Login;