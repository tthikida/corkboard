import React from "react";

function CreateNote(props) {
    return (
        <div className={"note"}>
            <dl>
                <dt>{props.title}</dt>
                <dd>{props.content}</dd>
            </dl>
        </div>
    );
}

export default CreateNote;