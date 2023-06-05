import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateNote from "./CreateNote"

function App() {
    const [stickyNotes, setStickyNotes] = useState(["a","b","c"])
    
    function addNote(newNote) {
        setStickyNotes(prevNotes => {
            return [...prevNotes, newNote];
        })
    }
    
    function deleteNote(id) {
        setStickyNotes(prevNotes => {
            return prevNotes.filter((note, index) => {
                return index !== id;    
            })
        })       
    }
    
    return (
        <div>
            <Header />
            <CreateNote />
            {stickyNotes.map((note, index) => {
                console.log(note);
                return (
                    <Note
                        key={index}
                        id={index}
                        title={note.title}
                        content={note.content}
                        onDelete={deleteNote}
                    />
                )
            })}
            
            <Footer />
        </div>
    )
}

export default App;

// <CreateNote
//     key={index}
//     id={index}
//     title={note.title}
//     content={note.content}
//     deleteNote={deleteNote}
// />