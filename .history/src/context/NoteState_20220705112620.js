import NoteContext from "./NoteContext";

const NoteState=(props)=>{
    const notes={
        
    }
    return(
        <NoteContext.Provider value={state}>
            {props.children}
        </NoteContext.Provider>

    )
}

export default NoteState