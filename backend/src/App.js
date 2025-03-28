import dotenv from 'dotenv'
dotenv.config() //call this before calling database
import cors from 'cors'
import express from "express"
import {connectDB} from "./lib/db.js"
import cookieParser from "cookie-parser" ;
import AuthRoute from './routes/user.route.js'
// import Dashboard from './routes/dashboard.route.js'


connectDB()
const app = express()

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
}))

const port = process.env.PORT || 3001

app.use("/api/auth",AuthRoute)
// app.use("/api/auth",Dashboard)
app.use("/api/auth/admin",AuthRoute)
// app.use("/api/auth/admin",Dashboard)

try {
 
    app.listen(port,()=>
        {
        console.log(`server is running on ${port}`)
        }
)   
} catch (error) {
    console.log("error in app.js",error)
}