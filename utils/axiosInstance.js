import axios from "axios";

export const axiosInstance = axios.create({
    baseURL:"https://email-server-mu.vercel.app/",
})
