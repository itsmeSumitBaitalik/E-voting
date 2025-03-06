import express from 'express'
import {protectRoute} from '../middlewares/auth.middlewares.js'
import {login,signup,logout,updateProfile} from '../controllers/user/user.controller.js'

const router = express.Router()

router.post("/login",login)
router.post("/signup",signup)
router.post("/update-profile",protectRoute,updateProfile)
router.post("/logout",logout)


export default router;