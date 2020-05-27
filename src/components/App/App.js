import React from "react";
import "./App.css";
import { Sidebar } from "../Sidebar";
import { MainView } from "../MainView";
import useNote from "./useNote";

function App() {
  const { notes, setSelectedNote, selectedNote } = useNote();
  return (
    <div className="app">
      <Sidebar notes={notes} onChange={(note) => setSelectedNote(note)} />
      <MainView note={selectedNote} />
    </div>
  );
}

export default App;
