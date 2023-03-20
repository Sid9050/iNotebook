import NoteContext from "./NoteContext";

const NoteState=(props)=>{
    const state={
        name:"abcd",
        class:"12334"
    }
    return{
        <NoteContext provider value={state}>
            {props.children}
        </NoteContext>

    }
}

export default NoteState