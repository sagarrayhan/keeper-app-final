import React, { useState } from "react";
import Heading from "./Heading";
import CreateNote from "./CreateNote";
import ShowNote from "./ShowNote";
import Footer from "./Footer";
import axios from "axios";
import "./App.css"
const App = () => {
  const [notes, setNotes] = useState([]);
  axios.get("https://keeper-app-backend-1d3c.onrender.com").then((dbData) => {
    setNotes(dbData.data);
  });

  return(
    <>
      <Heading/>
    <CreateNote/>
    {notes.map((note)=>{return <ShowNote key = {note._id} id = {note._id} title = {note.title} note ={note.note}/>})}
    <Footer/>
    </>
  )
};

export default App;
