import { useEffect, useState } from "react";
import NoteContainer from "./components/NoteContainer/NoteContainer";
import Sidebar from "./components/Sidebar/Sidebar";


import "./Notes.css";


function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes-app")) || [],
  );

  const addNote = (color) => {
    const tempNotes = [...notes];

    tempNotes.push({
      id: Date.now() + "" + Math.floor(Math.random() * 49),
      text: "",
      time: Date.now(),
      color,
    });
    setNotes(tempNotes);
  };

  const deleteNote = (id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes.splice(index, 1);
    setNotes(tempNotes);
  };

  const updateText = (text,id)=>{
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes[index].text = text;
    setNotes(tempNotes);
  }
  // storing the notes in local storage
  useEffect(() => {
    localStorage.setItem("notes-app", JSON.stringify(notes));
  }, [notes]);
  return (
    <div className="App">
      
      <Sidebar addNote={addNote} />
      <NoteContainer 
      notes={notes} 
      deleteNote={deleteNote} 
      updateText = {updateText}
      />
     

    </div>
  );
}

export default App;