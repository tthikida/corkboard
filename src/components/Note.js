import React, {useState} from "react";
import DeleteIcon from '@mui/icons-material/Delete';
function Note(props) {
    const [isMouseOver, setIsMouseOver] = useState(false);
    function handleClick() {
        props.onDelete(props.id)
    }

    function handleMouseOver() {
        setIsMouseOver(true);
    }
    
    function handleMouseOut() {
        setIsMouseOver(false);
    }

    return (
        <div className={"note"}>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            {/*<button onClick={handleClick}>Delete</button>*/}
            <DeleteIcon 
                classname={"deleteButton"} 
                onClick={handleClick} 
                style={isMouseOver ? {color:"black"} : {color:"grey"}} 
                onMouseEnter={handleMouseOver}
                onMouseLeave={handleMouseOut}
            />
        </div>
    )
}

export default Note; 