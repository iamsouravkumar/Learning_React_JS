import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const notesInitial = [
            {
              "_id": "666582c1e244f6e7bbaf9883",
              "user": "66658267e244f6e7bbaf9881",
              "title": "react app",
              "description": "inotebook react app",
              "tag": "dev",
              "date": "2024-06-09T10:24:01.167Z",
              "__v": 0
            },
            {
              "_id": "6665832cee244f6e7bbaf9885",
              "user": "66658267e244f6e7bbaf9881",
              "title": "react app v2",
              "description": "inotebook react app v2",
              "tag": "dev",
              "date": "2024-06-09T10:24:14.157Z",
              "__v": 0
            },
            {
              "_id": "666582e45e244f6e7bbaf9888",
              "user": "66658267e244f6e7bbaf9881",
              "title": "react app v3",
              "description": "inotebook react app v3",
              "tag": "dev",
              "date": "2024-06-09T10:24:37.349Z",
              "__v": 0
            },
            {
              "_id": "666582e5e5244f6e7bbaf9888",
              "user": "66658267e244f6e7bbaf9881",
              "title": "react app v3",
              "description": "inotebook react app v3",
              "tag": "dev",
              "date": "2024-06-09T10:24:37.349Z",
              "__v": 0
            },
            {
              "_id": "666582e5e7244f6e7bbaf9888",
              "user": "66658267e244f6e7bbaf9881",
              "title": "react app v3",
              "description": "inotebook react app v3",
              "tag": "dev",
              "date": "2024-06-09T10:24:37.349Z",
              "__v": 0
            },
            {
              "_id": "666582e5e2484f6e7bbaf9888",
              "user": "66658267e244f6e7bbaf9881",
              "title": "react app v3",
              "description": "inotebook react app v3",
              "tag": "dev",
              "date": "2024-06-09T10:24:37.349Z",
              "__v": 0
            },
    ]
    // const s1 = {
        //     "name": "sourav",
        //     "age": "18"
        // }
        // const [state, setState] = useState(s1);
    // const update = () => {
    //     setTimeout(() => {
    //         setState({
    //             "name": "lakshita",
    //             "age": "17"
    //         })
    //     }, 2000);
    // }
    const [notes, setNotes] = useState(notesInitial)
    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;