import express from "express"
import 'dotenv/config'

import cors from "cors";
import morgan from "morgan";

import connectToDB from "./src/config/connectDB";
import userRouter from "./src/routes/UserRouter"



const app = express()
const PORT = process.env.PORT || 8081



// middlewares API

app.use(cors())
app.use(express.json())
app.use(morgan())

app.use("/api/users", userRouter)


app.listen(PORT, () => {
  connectToDB()
  console.log(`At the port: http://localhost:${PORT}`)
})

