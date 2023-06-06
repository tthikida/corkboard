import React, {useState} from "react";

function CreateNote(props) {
    const [extended, setExtended] = useState(false);
    const [contentHidden, setContentHidden] = useState(true);
    const [note, setNote] = useState({
        title: "",
        content:""
    })
    function extendTextArea() {
        setContentHidden(false)
    }

    function handleTextAreaClick() {
        setExtended(true);
    }
    

    function handleChange(e) {
        const {name, value} = e.target;
        console.log(name);
        console.log(value);
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
        
    }

    function submitNote(e) {
        console.log("add button");
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        setExtended(false)
        e.preventDefault();
    }


    return(
        <div className={"createNote"}>
            <form>
                <input 
                    name={"title"}
                    value={note.title}
                    className={"titleInput"} 
                    placeholder={"Enter title here"} 
                    onClick={extendTextArea} 
                    onChange={handleChange}
                />
                <textarea 
                    name={"content"}
                    value={note.content}
                    hidden={contentHidden} 
                    className={"description"} 
                    placeholder={"Write note here"} 
                    rows={extended ? 3 : 1}
                    onClick={handleTextAreaClick}
                    onChange={handleChange}
                />
                <button type={"submit"} onClick={submitNote}>Add</button>
            </form>
        </div>
    )
}

export default CreateNote;