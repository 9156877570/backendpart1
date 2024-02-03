// import dotenv from "dotenv"
// import connectDB from "./db/index.js"

// import connectDB from "./db";

// dotenv.config({
//     path:"./env"
// })
// connectDB()


import connectData from "./db/index.js";
import dotenv from "dotenv";
dotenv.config({
    path:"./env"
})
connectData()
















// import express from "express"
// const app=express()

// (
//     async ()=>{
//         try {
//             await mongoose.connect(`${process.env.MONGODB_URL}/${ DB_NAME}`)
//             app.get(process.env.PORT,()=>{
//                 console.log(`Port Listen On ${process.env.PORT}`)
//             })
//         } catch (error) {
//             console.error("Error : ",error)
//         }
//     }
// )()