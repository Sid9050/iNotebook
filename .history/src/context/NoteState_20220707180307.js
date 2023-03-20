import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState=(props)=>{
    const notesInitial=[
        {
            "_id": "62b700d7cb3f2d8d094c178a6",
            "user": "62b5cafaa35626de62e91cea",
            "title": "First note",
            "description": "WAke early",
            "tag": "personal",
            "date": "2022-06-25T12:34:31.142Z",
            "__v": 0
          },
          {
            "_id": "62b701a543388c1be4042b6d5",
            "user": "62b5cafaa35626de62e91cea",
            "title": "First note2",
            "description": "WAke early",
            "tag": "personal",
            "date": "2022-06-25T12:37:57.121Z",
            "__v": 0
          },
          {
            "_id": "62b700d7cb3f2d8d094c178a4",
            "user": "62b5cafaa35626de62e91cea",
            "title": "First note",
            "description": "WAke early",
            "tag": "personal",
            "date": "2022-06-25T12:34:31.142Z",
            "__v": 0
          },
          {
            "_id": "62b701a543388c1be4042b6d3",
            "user": "62b5cafaa35626de62e91cea",
            "title": "First note2",
            "description": "WAke early",
            "tag": "personal",
            "date": "2022-06-25T12:37:57.121Z",
            "__v": 0
          },{
            "_id": "62b700d7cb3f2d8d094c178a2",
            "user": "62b5cafaa35626de62e91cea",
            "title": "First note",
            "description": "WAke early",
            "tag": "personal",
            "date": "2022-06-25T12:34:31.142Z",
            "__v": 0
          },
          {
            "_id": "62b701a543388c1be4042b6d1",
            "user": "62b5cafaa35626de62e91cea",
            "title": "First note2",
            "description": "WAke early",
            "tag": "personal",
            "date": "2022-06-25T12:37:57.121Z",
            "__v": 0
          }
        ]
    const [notes, setNotes] = useState(notesInitial)

    //Add Note
    const addNote=(title,description,tag)=>{
        console.log("New note")
        const note={
            "_id": "62b701a543388c1be4042b6d1",
            "user": "62b5cafaa35626de62e91cea",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2022-06-25T12:37:57.121Z",
            "__v": 0
          };
        setNotes(notes.concat(note));
    }

    //Delete Note
    const deleteNote=(id)=>{
        console.log("Delete a node of id"+id)
        const newNotes=notes.filter((note)=>{return note._id!==id})
        setNotes(newNotes)
    }

    //Edit Note
    const editNote=(id,title,description,tag)=>{
        //API call

        const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          });
          return response.json(); // parses JSON response into native JavaScript objects
        }

        //Edit on client side
        for(let index=0;index<notes.length;index++){
            const element=notes[index]
            if(element._id===id){
                element.title=title
                element.description=description
                element.tag=tag
            }
        }
    }


    return(
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote}}>
            {props.children}
        </NoteContext.Provider>

    )
}

export default NoteState