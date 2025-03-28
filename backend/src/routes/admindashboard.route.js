
import express from 'express'
import { checkAdmin } from '../middlewares/admin.middleware'
const router = express.Router()


app.post("/dashboard",checkAdmin,dashboard)
app.post("/dashboard/parties",parties)
app.post("/dashboard/profile",checkAdmin,profile)

export default router;