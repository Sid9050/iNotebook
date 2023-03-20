import NoteContext from "./NoteContext";

const NoteState=(props)=>{
    const state={
        name:"abcd",
        class:"12334"
    }
    return{
        <NoteContext.Providerprovider value={state}>
            {props.children}
        </NoteContext.Providerprovider>

    }
}

export default NoteState