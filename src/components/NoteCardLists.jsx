import React from "react";
import NoteCard from "../components/NoteCard";
import InputCard from "./InputCard";

const NoteCardLists = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <div className="notes-lists">
      {notes.map((note) => (
        <NoteCard
          id={note.id}
          text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
      <InputCard handleAddNote={handleAddNote} />
    </div>
  );
};

export default NoteCardLists;
