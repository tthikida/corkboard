import React, {useState} from "react";
import Input from "./Input";


var isUserRegistered = false;

function LoginForm(props) {
    // setInterval(getTheTime, 1000);

    const [contact, setContact] = useState({
        fName: "",
        lName: "",
        email: ""
    });
    // const [theTime, setTime] = useState(new Date().toLocaleTimeString());
    // function getTheTime() {
    //     var newTime = new Date().toLocaleTimeString();
    //     setTime(newTime);
    // }
function changeBG() {
    isUserRegistered = !isUserRegistered
    console.log("changeBG");
}
    function handleChange(e) {
        const {name, value} = e.target;
        console.log(value);
        setContact(prevValue => {
            if(name === "fName") {
                return {
                    fName: value,
                    lName: prevValue.lName,
                    email: prevValue.email
                }
            } else if (name === "lName")  {
                    return {
                        fName: prevValue.fName,
                        lName: value,
                        email: prevValue.email
                    }
            } else if (name === "email") {
                return {
                    fName: prevValue.fName,
                    lName: prevValue.lName,
                    email: value
                }
            }
        });
    }
    
    
    return (
        <div className={"loginFormContainer"}>
            <h1>Please login or register</h1>
            <p>Hello, {contact.fName} {contact.lName}!</p>
            <p>{contact.email}</p>
            <form className={"loginForm"}
                    // onSubmit={handleClick}
            >
                <Input 
                    onChange={handleChange}
                    type={"text"} 
                    placeholder={"First Name"} 
                    name={"fName"}
                    // value={fullName.fName}
                    // onClick={handleClick}
                />
                <Input
                    onChange={handleChange}
                    type={"text"}
                    placeholder={"Last Name"}
                    name={"lName"}
                    // value={fullName.lName}
                    // onClick={handleClick}
                />
                <Input
                    onChange={handleChange}
                    type={"text"}
                    placeholder={"Email"}
                    name={"email"}
                    // value={fullName.lName}
                    // onClick={handleClick}
                />
                <button className={"logRegButton"} 
                        type={"button"}
                        onClick={changeBG}
                > <h1>{isUserRegistered ? "Login" : "Register"} </h1> </button>
                <button type={"button"} onClick={changeBG} style={{backgroundColor: "blue"}} />
            </form>
        </div>
    );
}

export default LoginForm;



//
// return (
//     <div className={"loginFormContainer"}>
//         <form className={"loginForm"}>
//             {/*<h1>the time: {theTime}</h1>*/}
//             <p>Hello, {headingText}!</p>
//             <Input type={"text"}
//                    placeholder={"Username"}
//                    value={name}
//                    onChange={handleChange}
//             />
//             <Input type={"password"} placeholder={"Password"} />
//             {props.isRegistered ? null : < Input type={"password"} placeholder={"Password"}/>}
//             <button className={"logRegButton"}
//                     type={"submit"}
//             > <h1>{props.isRegistered ? "Login" : "Register"} </h1> </button>
//             <button className={"timeButton"}
//                     type={"button"}
//                 // onClick={getTheTime}
//                     style={{backgroundColor: isMouseOver ? "blueviolet" : "grey"}}
//                     onMouseOver={handleMouseOver}
//                     onMouseOut={handleMouseOut}
//                     onClick={handleClick}
//             > Get the time! </button>
//         </form>
//     </div>
// );