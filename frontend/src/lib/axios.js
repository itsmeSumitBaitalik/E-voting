import axios from 'axios'

export const api = axios.create({
    baseURL:"http://localhost:3000/api/auth",
    withCredentials:true,
    
}) 

// axios.get("/login",)