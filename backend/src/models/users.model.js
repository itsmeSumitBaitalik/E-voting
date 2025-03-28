import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema({
  username: {
      type: String,
      required: true,
  },
  email:{
        type:String,
        required:true,
        unique:true
  },
  password:{
    type:String,
    required:true,
    minlength:[6,"minimum length of password is 6"]
  }
},
{
  timestamps:true
}
)

export const User = mongoose.model("User",userSchema)