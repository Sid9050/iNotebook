import React,{useContext} from 'react'


const NoteItem = (props) => {
    const { notes } = props;
    contex
    return (
        <div className='col-md-3'>
            <div className="card my-3">
                    <div className="card-body">
                        <h5 className="card-title">{notes.title}</h5>
                        <p className="card-text">{notes.description}</p>
                        <i className="fa-solid fa-trash mx-2" onClick={()=>{deleteNote(notes._id)}}></i>
                        <i className="fa-solid fa-file-pen mx-2"></i>
                    </div>
            </div>
        </div>
    )
}

export default NoteItem