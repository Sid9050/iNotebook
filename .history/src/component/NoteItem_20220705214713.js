import React from 'react'

const NoteItem = (props) => {
    const { notes } = props;
    return (
        <div>
            {notes.title}
            {notes.description}
            <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
        </div>
    )
}

export default NoteItem