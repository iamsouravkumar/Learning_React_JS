import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote'
const Notes = () => {
    const context = useContext(noteContext);
    const { notes, getNotes,editNote } = context;
    useEffect(() => {
        getNotes()
        //eslint-disable-next-line
    }, [])

    const [note, setNote] = useState({id:'', etitle: "", edescription: "", etag: "" });
    const ref = useRef(null)
    const closeref = useRef(null)
    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({id:currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
    }
    const handleClick = (e) => {
        console.log('updatin the note', note);
        editNote(note.id, note.etitle, note.edescription, note.etag);
        closeref.current.click();
    }
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    }
    return (
        <>
            <AddNote />
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Edit Note
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        {/*modal body st */}
                        <div className="modal-body">
                            <form className=''>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" name="etitle" id="exampleInputEmail1" aria-describedby="emailHelp" value={note.etitle} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="desc" className="form-label">Description</label>
                                    <input type="text" className="form-control" name="edescription" id="edescription" value={note.edescription} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" name="etag" id="etag" value={note.etag} onChange={onChange} />
                                    {/* modal body end */}
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={closeref} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row my-3'>
                <h2>Your Note</h2>
                {notes.map((note) => {
                    return <NoteItem key={note._id} updateNote={updateNote} note={note} />
                })}
            </div>
        </>
    )
}
export default Notes;