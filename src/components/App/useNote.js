import { useState, useEffect } from "react";

const NOTES = [
  { id: 1, content: "Hello world" },
  { id: 2, content: "Un message plus long pour voir" },
];

const useNote = () => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState();
  useEffect(() => {
    setNotes(NOTES);
  }, []);
  useEffect(() => {
    !selectedNote && setSelectedNote(notes[0]);
  }, [notes, selectedNote]);
  return { notes, setSelectedNote, selectedNote };
};

export default useNote;
