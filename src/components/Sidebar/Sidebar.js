import React from "react";
import "./Sidebar.css";

let Sidebar = ({ notes, onChange }) => {
  return (
    <div className="sidebar">
      <ul>
        {notes.map((note) => (
          <li onClick={() => onChange(note)}>{note.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
