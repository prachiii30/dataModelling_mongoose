import mongoose  from "mongoose";

const todoschema=new mongoose.Schema({
    content:{
        type:String,
        require:true,
    },
    complete:{
        type:Boolean,
        default:false
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    subTodos:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"SubTodo"
        }
    ]
},{timestamps:true});

export const Todo=mongoose.model("Todo",todoschema)