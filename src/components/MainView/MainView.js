import React from "react";
import "./MainView.css";

let MainView = ({ note }) => {
  return (
    <div className="main-view">
      <div>{note && note.content}</div>
    </div>
  );
};

export default MainView;
