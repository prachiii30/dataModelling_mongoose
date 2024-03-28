import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    //1. noraml hoe everyone defines the schema
    // username:String,
    // email:String,
    // isAcrive:Boolean

    //2. standard way, better
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        // required:[true,"Password is requires"]
        required:true
    }
},{timestamps:true})


export const User=mongoose.model("User",userSchema)