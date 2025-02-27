import express from 'express'
const app = express()

app.post("/api/login",login)
app.post("/api/signup",signup)
app.post("/api/dashboard",checker,dashboard)
app.post("/api/dashboard/vote",vote)
app.post("/api/dashboard/parties",parties)
app.post("/api/dashboard/contact",contact)
app.post("/api/dashboard/profile",profile)