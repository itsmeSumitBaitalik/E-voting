import axios from 'axios'

export const axios = axios.create({
    baseURL:"http://localhost:3000/api/auth",
    withCredentials:true,
    
}) 

axios.get("/login",)