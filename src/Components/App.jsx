import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note'
import CreateArea from './CreateArea';

function App(){
    // Create Note functionality
    const [notes, setNotes] = useState([]);

    function addNote(note){
        setNotes((preValue)=> {
            return [...preValue, note];
        })
    }

    // Delete Note functionality
    function deleteNote(id){
        setNotes((prevNotes)=>{
            return prevNotes.filter((noteItem, index)=>{
                return index !== id;
            })
        })
    }

    return <div>
        <Header />
        <CreateArea 
            onAdd={addNote}
        />
        {notes.map((item, index)=>{
            return <Note title={item.title} content={item.content} onDelete={deleteNote} key={index} id={index}/>
        })}
        <Footer />
    </div>
}

export default App;