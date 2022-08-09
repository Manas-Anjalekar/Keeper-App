import React from 'react';
import Note from "./Note";

export default function NotesList(props) {
  return(
    props.notes.map((noteItem, index) => {
            return (
              <Note
                key={index}
                id={index}
                title={noteItem.title}
                content={noteItem.content}
                deleteNoteItem={props.deleteNoteItem}
              />
            );
          })
  );
}
