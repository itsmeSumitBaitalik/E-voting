import {generateToken} from '../../lib/generateToken.js'
import bcrypt from "bcrypt"
import Admin from '../../models/admin.model.js'

export const login = async (req,res)=>{
    const {email,password} = req.body
    try {
        const user = await Admin.findOne({email})

        if (!user){
            return res.status(400).json({message:"Invalid Credential"})
        }

        const isPasswordcorrect = await bcrypt.compare(password,user.password)
        if (!isPasswordcorrect){
            return res.status(400).json({message:"Invalid Credential"})
        }

        generateToken(user._id,res)

        res.status(200).json({
            _id : user._id,
            fullname:user.fullname,
            email:user.email,
            profilepic:user.profilepic,
        })
    } catch (error) {
        console.log("error in login contoller",error.message)
        res.status(500).json({message:"internal server error in login"})
    }
}

export const logout = (req,res)=>{

    try {
        res.cookie("jwt","",{maxAge:0})
        res.status(200).json({message:"Logged out successfully"})
    } catch (error) {
        console.log("error in logout contoller",error.message)
        res.status(500).json({message:"internal server error"})
}}

export const updateProfile = async (req,res)=>{

    try {
        const {profilepic} = req.body
        const userId = req.user._id 

        if(!profilepic){
            return res.status(400).json({message:"Profile pic is required"})
        }

        const uploadRes = await cloudinary.uploader.upload(profilepic)
        const updateUser = await Admin.findByIdAndUpdate(userId,{profilepic:uploadRes.secure_url},{new:true})

        res.status(200).json(updateUser)

    } catch (error) {
         console.log("error in update controller",error.message)
         res.status(500).json({message:"internal server error"})

    }
}
export const dashboard = async (req,res)=>{}
export const contact = async (req,res)=>{}
export const parties = async (req,res)=>{}
export const vote= async (req,res)=>{}
export const profile= async (req,res)=>{}

