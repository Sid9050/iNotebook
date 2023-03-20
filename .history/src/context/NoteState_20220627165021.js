import React from "react";
import noteContext from "./NoteContext";

const NoteState=(props)=>{
    const state={
        name:"abcd",
        class:"12334"
    }
    return{
        <NoteState.provider>
            {props.children}
        </NoteState.provider>

    }
}

export default NoteState