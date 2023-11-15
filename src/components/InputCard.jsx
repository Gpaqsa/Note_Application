import React, { useState } from "react";

const InputCard = ({ handleAddNote }) => {
  const [addNoteText, setAddNoteText] = useState("");
  const characterLimit = 200;

  const handleChange = (e) => {
    if (characterLimit - e.target.value.length >= 0) {
      setAddNoteText(e.target.value);
    }
  };

  const handleSaveClick = () => {
    if (addNoteText.trim().length > 0) {
      handleAddNote(addNoteText);
      setAddNoteText("");
    }
  };

  return (
    <div className="note-card new">
      <textarea
        placeholder="Type to add a note..."
        cols="10"
        rows="8"
        onChange={handleChange}
        value={addNoteText}
      ></textarea>
      <div className="note--footer">
        <small>200 Remaining</small>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default InputCard;
