import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
function Note(props) {
    function handleClick() {
        props.onDelete(props.id)
    }
    
    return (
        <div className={"note"}>
            <h1>{props.title}</h1>
            {/*<hr />*/}
            <p>{props.content}</p>
            {/*<button onClick={handleClick}>Delete</button>*/}
            <DeleteIcon classname={"deleteButton"} onClick={handleClick} style={{color:"grey"}}/>
        </div>
    )
}

export default Note; 