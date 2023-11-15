import { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import NoteCardLists from "./components/NoteCardLists";
import Search from "./components/Search";

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first Note!",
      date: "27/09/2023",
    },
    {
      id: nanoid(),
      text: "This is my second Note!",
      date: "27/09/2023",
    },
    {
      id: nanoid(),
      text: "This is my third Note!",
      date: "27/09/2023",
    },
    {
      id: nanoid(),
      text: "This is my third Note!",
      date: "27/09/2023",
    },
    {
      id: nanoid(),
      text: "This is my third Note!",
      date: "27/09/2023",
    },
  ]);
  const [searchText, setSearchText] = useState("");

  const handleAddNote = (text) => {
    console.log(text);
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
    console.log(newNotes);
  };

  const handleDeleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  return (
    <div className="container">
      <Search handleSearchNote={setSearchText} />
      <NoteCardLists
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText)
        )}
        handleAddNote={handleAddNote}
        handleDeleteNote={handleDeleteNote}
      />
    </div>
  );
}

export default App;
