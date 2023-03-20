import React from 'react'

const NoteItem = (props) => {
    const {notes}=props;
  return (
    <div>
        {notes.title}
        {notes.descri}
    </div>
  )
}

export default NoteItem