import express from "express"
import 'dotenv/config'

import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import connectToDB from "./src/config/connectDB";


import router from './src/routes/configRouter'



const app = express()
const PORT = process.env.PORT || 8081



// middlewares API

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(morgan())

app.use('/api/v1', router)


app.listen(PORT, () => {
  connectToDB()
  console.log(`At the port: http://localhost:${PORT}`)
})

