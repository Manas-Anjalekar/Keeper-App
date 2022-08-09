import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import api from '/home/manas/Web Development/Keeper-App/api'

function AddNote(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [isExpanded, setIsExpanded] = useState(false);

  function addNoteProperty(event) {
    const { name, value } = event.target;

    if(name !== null && value !== null){
      setNote(prevNote => {
        return {
          ...prevNote,
          [name]: value
        };
      });
    }
  }

  function submitNote(event) {
    props.addNoteItem(note);
    api.insertNote(note).then(res => {
        window.alert(`Movie inserted successfully`)
    })
    setNote({
      title: "",
      content: ""
    })
    setIsExpanded(false);
    event.preventDefault();
  }

  function updateIsExpanded() {
    setIsExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && <input
          name="title"
          onChange={addNoteProperty}
          value={note.title}
          placeholder="Title"
        />}
        <textarea
          name="content"
          onChange={addNoteProperty}
          onClick={updateIsExpanded}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? '3' : '1'}
        />
        <Zoom in={isExpanded && true}><Fab onClick={submitNote}><AddIcon /></Fab></Zoom>
      </form>
    </div>
  );
}

export default AddNote;
