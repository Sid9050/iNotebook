import React from 'react'

const NoteItem = (props) => {
    const { notes } = props;
    return (
        <div>
            {notes.title}
            {notes.description}
            <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{notes.title}</h5>
                        <p class="card-text">{notes.description}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
        </div>
    )
}

export default NoteItem