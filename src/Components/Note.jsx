/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>Del</button>
    </div>
  );
}

export default Note;