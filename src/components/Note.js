import React from "react";

function Note(props) {
    function handleClick() {
        props.onDelete(props.id)
    }
    
    return (
        <div className={"note"}>
            <h1>title{props.title}</h1>
            <p>content{props.content}</p>
            <button onClick={handleClick}>Delete</button>
        </div>
    )
}

export default Note; 