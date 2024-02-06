import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express()

app.use(cors({
    origin:process.env.CORS_ORIGIN
}))
app.use(express.urlencoded({
    extended:true,
    limit:"16kb"
}))
app.use(express.static("publice"))
app.use(express.json({limit:"16kb"}))
app.use(cookieParser())








// app.use('/Router', Router) 

// app.get("/", (req, res) => {
//     res.send("<h2>Ganesh Is Here</h2>")
// })
// app.listen(2000, () => {
//     console.log(`Port Running : 2000`)
// })



