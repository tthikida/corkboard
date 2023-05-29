import React from "react";
import Input from "./Input";


function LoginForm(props) {
    return (
        <div className={"loginFormContainer"}>
            <form className={"loginForm"}>
                <Input type={"text"} placeholder={"Username"} />
                <Input type={"password"} placeholder={"Password"} />
                {props.isRegistered ? null : < Input type={"password"} placeholder={"Password"}/>} 
                <button style={{backgroundColor: "red"}} type={"submit"}> <h1>{props.isRegistered ? "Login" : "Register"} </h1></button>
            </form>
        </div>
    );
}

export default LoginForm;