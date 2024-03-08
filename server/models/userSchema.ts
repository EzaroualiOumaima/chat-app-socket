import mongoose from "mongoose";
 interface User {
    name : string
    isConnected : boolean
 }

 const userSchema = new mongoose.Schema({
    name: String,
    isConnected :{
        type: Boolean,
        default : false
    }

 }) 

 const userModel = mongoose.model("User" , userSchema)
 export default userModel