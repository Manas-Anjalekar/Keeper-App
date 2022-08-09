import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import NotesList from './NotesList';
import NotesInsert from "./NotesInsert";
import api from '/home/manas/Web Development/Keeper-App/api';

function App() {

  const [notes, setNotes] = useState([]);

  function addNoteItem(newNote) {
    setNotes((prevValue) => {return[...prevValue, newNote]});
    event.preventDefault();
  }

  function deleteNoteItem(id) {
    api.deleteNoteById(id)
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }


  return (
    <div>
      <Header />
      <NotesInsert addNoteItem={addNoteItem} />
      <NotesList notes={notes} deleteNoteItem={deleteNoteItem} />
      <Footer />
    </div>
  );
}

export default App;
