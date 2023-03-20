const mongoose=require('mongoose')

const NotesSchema=new Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
}
)

module.exports=mongoose('user',UserSchema);