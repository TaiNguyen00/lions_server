import express from "express"
import 'dotenv/config'

// const { createProxyMiddleware } = require('http-proxy-middleware');


import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

import connectToDB from "./src/config/connectDB";


import router from './src/routes/configRouter'



const app = express()

let PORT = process.env.NODE_ENV === 'production' ? process.env.PORT_MAIN : process.env.PORT_DEV




// middlewares API
app.use(cors());

// {
//   origin: ['http://localhost:5173', 'http://127.0.0.1:5173', 
//   'http://localhost:5174', 'http://localhost:3000', 'http://localhost:3001', "http://127.0.0.1:3000", "https://sandbox.vnpayment.vn"],
//   credentials: true,

// }
app.use(cookieParser())
app.use(morgan())
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
app.use(express.json())


app.use('/api/v1', router)
// app.use('/api/v1/order/create_payment_url', createProxyMiddleware({target: 'https://sandbox.vnpayment.vn/paymentv2/vpcpay.html', changeOrigin: true}))


app.listen(PORT, () => {
  connectToDB()
  console.log(`At the port: http://localhost:${PORT}`)
})

