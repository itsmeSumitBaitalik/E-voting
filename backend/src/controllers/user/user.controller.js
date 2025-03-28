import {generateToken} from '../../lib/generateToken.js'
import bcrypt from "bcrypt"
import { User } from '../../models/users.model.js'
import { sendEmailToAdmin } from '../../lib/emailGenerator.js'

export const signup = async (req,res)=>{
    const {username,password,email} = req.body
    try {
        if(!email||!password||!username){
            return res.status(400).json({message:"All fields are required"})
        }

        if(password.length<6){
            return res.status(400).json({message:"Password must be at least 6 character"})
        }
        
        const user = await User.findOne({email})

        if (user) return res.status(400).json({message:"Email already exists"})
        
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password,salt)

        const newUser = new User({
            username:username,
            email:email,
            password:hashPassword,
        })

        if (newUser){
            generateToken(newUser._id,res)  
            await newUser.save()

            res.status(201).json({
                _id:newUser._id,
                username:newUser.username,
                email:newUser.email,
                profilepic:newUser.profilepic,

            })
        }else{
            res.status(400).json({message:"invalid user data"})
        }

    } catch (error) {
        console.log("error in signup controller",error.message)
        res.status(500).json({message:"internal server error"})
        
    }
}

export const login = async (req,res)=>{
    const {email,password} = req.body
    try {
        if (!email||!password){
            return res.status(400).json({message:"All feilds are required"})
        }
        
        const user = await User.findOne({email})
        if (!user){
            return res.status(400).json({message:"User not found!"})
        }

        const isPasswordcorrect = await bcrypt.compare(password,user.password)
        if (!isPasswordcorrect){
            return res.status(400).json({message:"Incorrect Password"})
        }

        generateToken(user._id,res)

        res.status(200).json({
            message:"successfully logged IN",
            _id : user._id,
            username:user.username,
            email:user.email,
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
        const updateUser = await User.findByIdAndUpdate(userId,{profilepic:uploadRes.secure_url},{new:true})

        res.status(200).json(updateUser)

    } catch (error) {
         console.log("error in update controller",error.message)
         res.status(500).json({message:"internal server error"})

    }
}
export const contact = async (req, res) => {
    try {
        const { name, subject, email, message } = req.body;

        // Validate required fields
        if (!name || !email || !message || !subject) {
            return res.status(400).json({ message: "All fields are required!" });
        }

        // If using nodemailer to send an email (Optional)
        await sendEmailToAdmin(name, subject, email, message);

        return res.status(200).json({ 
            success: true, 
            message: "Your message has been sent successfully!" 
        });

    } catch (error) {
        console.error("Error in contact form:", error);
        return res.status(500).json({ 
            success: false, 
            message: "Something went wrong. Please try again later." 
        });
    }
};


export const dashboard = async(req,res)=>{
    
    
}

export const vote = async()=>{
    const {vote} = req.body
    
}
export const profile = async()=>{}
export const parties = async()=>{}
