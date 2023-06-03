import React from "react";

function Input(props) {
    return (
        <div>
            <input
                onChange={props.onChange}
                type={"text"}
                placeholder={props.placeholder}
                name={props.name}
            />
        </div>
    )
}

export default Input;