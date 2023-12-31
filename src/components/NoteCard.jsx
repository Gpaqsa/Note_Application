import React from "react";
import { MdDeleteForever } from "react-icons/md";

const NoteCard = ({ id, text, date, handleDeleteNote }) => {
  return (
    <div className="note-card" id={id}>
      <span>{text}</span>
      <div className="note--footer">
        <small>{date}</small>
        <MdDeleteForever
          className="delete-icon"
          size="1.3em"
          onClick={() => handleDeleteNote(id)}
        />
      </div>
    </div>
  );
};

export default NoteCard;
