import React, {useState} from "react";

function CreateNote(props) {
    const [extended, setExtended] = useState(false);
    
    function extendTextArea() {
        setExtended(true);
    }

    function addNote() {
        setExtended(false);
    }

    return(
        <div className={"createNote"}>
            <input className={"titleInput"} placeholder={"Title"} onClick={extendTextArea} />
            <textarea className={"description"} placeholder={"Write note here"} rows={extended ? 3 : 1}/>
            <button onClick={addNote}>Add</button>
        </div>
    )
}

export default CreateNote;