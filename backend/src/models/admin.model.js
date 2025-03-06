import mongoose, { Schema } from 'mongoose'

const adminSchema = new Schema({
  username: {
    type:String,
    required:true,
    unique:true
  },
  email:{
        type:String,
        required:true,
        unique:true
  },
  password:{
    type:String,
    required:true,
    select:false,
    minlength:[6,"minimum length of password is 6"]
  }
},
{
  timestamps:true
}
)

const Admin = mongoose.model("Admin",adminSchema)
export default Admin