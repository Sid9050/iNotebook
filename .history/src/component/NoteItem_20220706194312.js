import React from 'react'

const NoteItem = (props) => {
    const { notes } = props;
    return (
        <div className='col-md-3'>
            <div class="card my-3">
                    <div class="card-body">
                        <h5 class="card-title">{notes.title}</h5>
                        <p class="card-text">{notes.description}</p>
                        <i class="fa-solid fa-trash mx-2"></i>
                        <i class="fa-solid fa-file-pen mx-2"></i>
                    </div>
            </div>
        </div>
    )
}

export default NoteItem