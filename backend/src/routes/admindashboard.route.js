
import express from 'express'
const router = express.Router()


app.post("/dashboard",protectRoute,dashboard)
app.post("/dashboard/parties",parties)
app.post("/dashboard/profile",protectRoute,profile)

export default router;