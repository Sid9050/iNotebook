import NoteContext from "./NoteContext";

const NoteState=(props)=>{
    const notes=[
        {
            "_id": "62b700d7cb3f2d8d094c178a",
            "user": "62b5cafaa35626de62e91cea",
            "title": "First note",
            "description": "WAke early",
            "tag": "personal",
            "date": "2022-06-25T12:34:31.142Z",
            "__v": 0
          },
          {
            "_id": "62b701a543388c1be4042b6d",
            "user": "62b5cafaa35626de62e91cea",
            "title": "First note2",
            "description": "WAke early",
            "tag": "personal",
            "date": "2022-06-25T12:37:57.121Z",
            "__v": 0
          }
        ]
    return(
        <NoteContext.Provider value={}>
            {props.children}
        </NoteContext.Provider>

    )
}

export default NoteState