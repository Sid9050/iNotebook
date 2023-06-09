import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState=(props)=>{
    const host= "https://inotebookapi-g654.onrender.com"
    const notesInitial=[]
    const [notes, setNotes] = useState(notesInitial)
    //Get all Notes
    const getNotes=async ()=>{
        //API call
        const token=localStorage.getItem('token')
        console.log("token"+token)
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'auth-token':  token
            },
          });
          const json= await response.json();
          setNotes(json)
        }

    //Add Note
    const addNote=async (title,description,tag)=>{
        //API call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'auth-token':localStorage.getItem('token')
            },
            body: JSON.stringify({title,description,tag})
          });
          const note= await response.json();
          setNotes(notes.concat(note));
    }

    //Delete Note

    

    const deleteNote=async (id)=>{
        //API call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'auth-token': localStorage.getItem('token')
            }
          });
        const json= await response.json();
        const newNotes=notes.filter((note)=>{return note._id!==id})
        setNotes(newNotes)
    }

    //Edit Note
    const editNote=async (id,title,description,tag)=>{
        //API call

        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({title,description,tag})
          });
          const json= await response.json();
         
        let newNotes=JSON.parse(JSON.stringify(notes))
        //Edit on client side
        for(let index=0;index<newNotes.length;index++){
            const element=newNotes[index]
            if(element._id===id){
                newNotes[index].title=title
                newNotes[index].description=description
                newNotes[index].tag=tag
                break;
            }
        }
        setNotes(newNotes)
    }
    


    return(
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote,getNotes}}>
            {props.children}
        </NoteContext.Provider>

    )
}

export default NoteState