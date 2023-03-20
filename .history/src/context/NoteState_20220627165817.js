import NoteContext from "./NoteContext";

const NoteState=(props)=>{
    const state={
        name:"abcd",
        class:"12334"
    }
    return{
        <NoteContext.Provider value={state}>
            {props.chi}
        </NoteContext.Provider>

    }
}

export default NoteState