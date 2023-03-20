import React from "react";
import NoteContext from "./NoteContext";

const NoteState=(props)=>{
    const state={
        name:"abcd",
        class:"12334"
    }
    return{
        <noteContext.provider value={state}>
            {props.children}
        </noteContext.provider>

    }
}

export default NoteState