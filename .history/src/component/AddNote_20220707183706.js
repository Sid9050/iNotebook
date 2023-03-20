import React,{useState,useContext} from 'react'
import NoteContext from '../context/NoteContext'

const AddNote = () => {
    const context = useContext(NoteContext)
    const {addNote}=context;

    const [note, setNote] = useState({title:"",description:"",tag:""})
    const handelClick=(e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag)
    }
    const onChange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value})
    }
  return (
    <div className='container my-3'>
      <h2>Add a Note</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="email" className="form-control" id="title" name='title' aria-describedby="emailHelp" onChange={onChange}/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input type="text" className="form-control" id="description" name="description" onChange={onChange}/>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input type="text" className="form-control" id="description" name="description" onChange={onChange}/>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handelClick}>Add a note</button>
      </form>
      </div>
  )
}

export default AddNote