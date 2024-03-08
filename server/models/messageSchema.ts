import mongoose, { Schema } from "mongoose"

interface Message{
    content : string 
    sender : string

}
const messageSchema = new mongoose.Schema({
  content : String,
  sender :{
    type : mongoose.Types.ObjectId,
    ref: 'User'
  }
})

const messageModel = mongoose.model("Message" , messageSchema)
export default messageModel