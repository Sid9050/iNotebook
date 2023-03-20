import NoteContext from "./NoteContext";

const NoteState=(props)=>{
    const state={
        name:"abcd",
        class:"12334"
    }
    return{
        <NoteContextprovider value={state}>
            {props.children}
        </NoteContextprovider>

    }
}

export default NoteState