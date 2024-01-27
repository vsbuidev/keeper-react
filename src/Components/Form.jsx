/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab, Zoom } from "@mui/material";

function Form(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function showAlert() {
    const div = document.createElement("div");
    div.className = "alert error";
    div.appendChild(document.createTextNode("Please add all Fields!."));
    const createArea = document.querySelector(".create-area");
    const form = document.querySelector("create-note");
    createArea.insertBefore(div, form);

    setTimeout(() => {
      document.querySelector(".alert").remove();
    }, 3000);
  }

  function submitNote(event) {
    if (note.title === "" || note.content === "") {
      showAlert();
    } else {
      props.onAdd(note);
      setNote({
        title: "",
        content: "",
      });
    }
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div className="create-area">
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote} color="primary">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default Form;
