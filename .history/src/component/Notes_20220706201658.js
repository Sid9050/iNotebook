import React,{useContext} from 'react'
import NoteContext from '../context/NoteContext'
import AddNote from './AddNote'
import NoteItem from './NoteItem'

export const Notes = () => {
    const context = useContext(NoteContext)
    const{notes,addNote}=context
  return (
    <>
    <AddNote/>
    <div className='row my-3'>
      <h2>Your Notes</h2>
        {notes.map((notes)=>{
          return <NoteItem key={notes._id} notes={notes}/>
        })}
      </div>\
    </>
  )
}
