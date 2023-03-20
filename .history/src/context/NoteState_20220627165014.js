import React from "react";
import noteContext from "./NoteContext";

const NoteState=(props)=>{
    const state={
        name:"abcd"
    }
    return{
        <NoteState.provider>
            {props.children}
        </NoteState.provider>

    }
}

export default NoteState