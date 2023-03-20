import React from 'react'

const NoteItem = (props) => {
    const {notes}=props;
  return (
    <div>
        {notes.title}
        
    </div>
  )
}

export default NoteItem