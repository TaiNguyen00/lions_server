import express from "express"
import 'dotenv/config'



import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import connectToDB from "./src/config/connectDB";


import router from './src/routes/configRouter'



const app = express()

let PORT = process.env.NODE_ENV === 'production' ? process.env.PORT_MAIN : process.env.PORT_DEV



// middlewares API
app.use(cors());

app.use(cookieParser())
app.use(morgan())
app.use(express.json())


app.use('/api/v1', router)


app.listen(PORT, () => {
  connectToDB()
  console.log(`At the port: http://localhost:${PORT}`)
})

