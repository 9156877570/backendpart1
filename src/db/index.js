// import mongoose from "mongoose";
// import { DB_NAME } from "../constant.js";

// const connectDB= async()=>{
//     try {
//        const databaseConn = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//        console.log(" DB Connected SuccesFully !!")
//     //    console.log(databaseConn)
//     } catch (error) {
//         console.error("Error:",error)
//         process.exit(1)
//     }
// }
// export default connectDB;

import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectData= async ()=>{
     try {
        const data= await mongoose.connect(`${process.env.MONGODB_URI}/${ DB_NAME }`)

        console.log("Congrats DB Connected Succesfully!!!")
        console.log(`At Port ${process.env.PORT}`)
     } catch (error) {
        console.log("error:",error)
        process.exit(1)
     }
}
export default connectData;