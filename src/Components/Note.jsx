import React from "react";

function Note(props){

    function deleteNote(event){
        props.onDelete(props.id)
        event.preventDefault();
    }

    return <div className="note">
        
        <h3>{props.title}</h3>
        <p>{props.content}</p>
        <button
            onClick={deleteNote}
        ><i class="fas fa-trash"></i></button>
    </div>
}

export default Note;