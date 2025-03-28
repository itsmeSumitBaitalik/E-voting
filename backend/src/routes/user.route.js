import express from 'express'
import {checkUser} from '../middlewares/auth.middlewares.js'
import {vote,parties,profile,contact,login,signup,logout,updateProfile,dashboard} from '../controllers/user/user.controller.js'

const router = express.Router()

router.post("/login",login)
router.post("/signup",signup)
router.post("/update-profile",checkUser,updateProfile)
router.post("/logout",logout)

//dashboard

router.get("/dashboard",checkUser,dashboard)
router.post("/dashboard/vote",checkUser,vote)
router.post("/dashboard/parties",parties)
router.post("/dashboard/contact",contact)
router.post("/dashboard/profile",checkUser,profile)


export default router;