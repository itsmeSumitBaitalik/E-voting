
import express from 'express'
import {dashboard,vote,parties,contact,profile} from '../controllers/admin/admin.controller.js'
import { checkAdmin } from '../middlewares/admin.middleware.js'

const router = express.Router()

router.post("/dashboard",checkAdmin,dashboard)
router.post("/dashboard/vote",vote)
router.post("/dashboard/parties",parties)
router.post("/dashboard/contact",contact)
router.post("/dashboard/profile",checkAdmin,profile)

export default router;