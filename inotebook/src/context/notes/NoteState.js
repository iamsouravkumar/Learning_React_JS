import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = 'http://localhost:5000'
  const notesInitial = []

  const [notes, setNotes] = useState(notesInitial)

  //GET a Note.
  const getNotes = async () => {
    //API call
    const response = await fetch(`${host}/api/note/fetchallnotes/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY2NTgyNjdlMjQ0ZjZlN2JiYWY5ODgxIn0sImlhdCI6MTcxNzkyODU1Mn0.WD1cRtQP6Eox535IT9fLoZQz38uDxDHChHbgkHd_Yr4"
      }
    });
    const json = await response.json();
    setNotes(json);
  }
  //ADD a Note
  const addNote = async (title, description, tag) => {
    //API call
    const response = await fetch(`${host}/api/note/addnote/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY2NTgyNjdlMjQ0ZjZlN2JiYWY5ODgxIn0sImlhdCI6MTcxNzkyODU1Mn0.WD1cRtQP6Eox535IT9fLoZQz38uDxDHChHbgkHd_Yr4"
      },
      body: JSON.stringify({ title, description, tag }),
    });

    console.log('adding a new note');
    const note = {
      "_id": "6663582e5e2484f6e7bbaf9888",
      "user": "66658267e244f6e7bbaf9881",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2024-06-09T10:24:37.349Z",
      "__v": 0
    }
    const json = await response.json();
    console.log(json);
    setNotes(notes.concat(note))
  }

  //Delete a Note
  const deleteNote = async (id) => {
    //API call
    const response = await fetch(`${host}/api/note/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY2NTgyNjdlMjQ0ZjZlN2JiYWY5ODgxIn0sImlhdCI6MTcxNzkyODU1Mn0.WD1cRtQP6Eox535IT9fLoZQz38uDxDHChHbgkHd_Yr4"
      },
    });
    const json = await response.json()
    console.log(json);
    const newNote = notes.filter((note) => { return note._id !== id })
    setNotes(newNote)
  }

  //Edit Note
  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/note/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY2NTgyNjdlMjQ0ZjZlN2JiYWY5ODgxIn0sImlhdCI6MTcxNzkyODU1Mn0.WD1cRtQP6Eox535IT9fLoZQz38uDxDHChHbgkHd_Yr4"
      },
      body: JSON.stringify({ id, title, description, tag }),
    });
    const json = await response.json()
    console.log(json);

    let newNotes = JSON.parse(JSON.stringify(notes));
    //logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes)
  }
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}
export default NoteState;