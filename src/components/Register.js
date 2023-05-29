import React from "react";
import Input from "./Input";

function Register() {
    return (<div className={"loginContainer"}>
                <form className={"loginForm"}>
                    <Input
                        type={"text"}
                        placeholder={"Username"}
                    />
                    <Input
                        type={"password"}
                        placeholder={"Password"}
                    />
                    <Input
                        type={"password"}
                        placeholder={"Confirm Password"}
                    />
                    <button type={"submit"}><h1>Register</h1></button>
                </form>
            </div>
    )
}

export default Register;