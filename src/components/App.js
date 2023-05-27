import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import notes from "../notes";
import CreateNote from "./CreateNote"

function App() {
    return (
        <div>
            <Header />
            {notes.map(note => 
                <CreateNote
                    key={note.id}
                    title={note.title}
                    content={note.content}
                    />
            )}
            <Footer />
        </div>
    )
}

export default App;