import React from 'react'

export const Notes = () => {
    const context = useContext(NoteContext)
    const{notes,setNotes}=context
  return (
    <div className='container my-3'>
      <h2>Your Notes</h2>
        {notes.map((notes)=>{
          return notes.title
        })}
      </div>
  )
}
