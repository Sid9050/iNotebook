import React from 'react'

const NoteItem = (props) => {
    const {notes}=props;
  return (
    <div>
        {notes.title}
        {notes.description}
        
    </div>
  )
}

export default NoteItem