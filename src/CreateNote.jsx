import React, { useState } from "react";
import axios from "axios";
import AddIcon from '@mui/icons-material/Add';

const CreateNote = (props) => {
  const [note, setNote] = useState({ title: "", note: "" });
  const [checkClick, setCheckClick] = useState(false);

  function updateClick() {
    setCheckClick(true);
  }
  function updateNote(e) {
    const { name, value } = e.target;
    setNote({ ...note, [name]: value });
  }

  return (
    <div className="input-area">
      {checkClick && (
        <input
          type="text"
          placeholder="Title"
          name="title"
          onChange={updateNote}
          value={note.title}
        />
      )}
      <textarea
        onClick={updateClick}
        rows={checkClick ? "3" : "1"}
        placeholder="Your Note"
        name="note"
        onChange={updateNote}
        value={note.note}
      />
      <button
        onClick={() => {
          axios
            .post("https://keeper-app-backend-1d3c.onrender.com/", note);
          setNote({ title: "", note: "" });
          setCheckClick(false);
          
        }}
      >
        <AddIcon/>
      </button>
    </div>
  );
};

export default CreateNote;
