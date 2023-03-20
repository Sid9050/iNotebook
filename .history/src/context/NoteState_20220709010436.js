import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState=(props)=>{
    const host= "http://localhost:5000"
    const notesInitial=[]
    const [notes, setNotes] = useState(notesInitial)
    //Get all Notes
    const getNotes=async ()=>{
        //API call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiNWNhZmFhMzU2MjZkZTYyZTkxY2VhIn0sImlhdCI6MTY1NjE1NDgzN30.7WYGeHoNmX5BVhuHHlqskYQiPj7PL5JLV6NMGVhKVXY'
            },
          });
          const json= await response.json();
          console.log(json)
          setNotes(json)
        }

    //Add Note
    const addNote=async (title,description,tag)=>{
        //API call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiNWNhZmFhMzU2MjZkZTYyZTkxY2VhIn0sImlhdCI6MTY1NjE1NDgzN30.7WYGeHoNmX5BVhuHHlqskYQiPj7PL5JLV6NMGVhKVXY'
            },
            body: JSON.stringify({title,description,tag})
          });
          const = await response.json();
          console.log(json)

        console.log("New note")
        const note=
        setNotes(notes.concat(note));
    }

    //Delete Note

    

    const deleteNote=async (id)=>{
        //API call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiNWNhZmFhMzU2MjZkZTYyZTkxY2VhIn0sImlhdCI6MTY1NjE1NDgzN30.7WYGeHoNmX5BVhuHHlqskYQiPj7PL5JLV6NMGVhKVXY'
            }
          });
        const json= await response.json();
        console.log(json)
        

        console.log("Delete a node of id"+id)
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
              'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiNWNhZmFhMzU2MjZkZTYyZTkxY2VhIn0sImlhdCI6MTY1NjE1NDgzN30.7WYGeHoNmX5BVhuHHlqskYQiPj7PL5JLV6NMGVhKVXY'
            },
            body: JSON.stringify({title,description,tag})
          });
          const json= await response.json();
          console.log(json)
         
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