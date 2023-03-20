import NoteContext from "./noteContext";

const NoteState=(props)=>{
    const state={
        "name":"abcd",
        "class":"12334"
    }
    return(
        <NoteContext.Provider value={state}>
            {props.children}
        </NoteContext.Provider>

    }
}

export default NoteState