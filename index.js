import express from "express"
import 'dotenv/config'

import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import connectToDB from "./src/config/connectDB";


// api
import userRouter from "./src/routes/UserRouter"
import authRouter from "./src/routes/AuthRouter"
import packageRouter from "./src/routes/PackageRouter"
import roomRouter from "./src/routes/RoomRouter"
import optionRouter from "./src/routes/OptionRouter"



const app = express()
const PORT = process.env.PORT || 8081



// middlewares API

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(morgan())

app.use("/api/v1/user", userRouter)
app.use("/api/v1/auth", authRouter)
app.use("/api/v1/package", packageRouter)
app.use("/api/v1/room", roomRouter)
app.use("/api/v1/option", optionRouter)


app.listen(PORT, () => {
  connectToDB()
  console.log(`At the port: http://localhost:${PORT}`)
})

