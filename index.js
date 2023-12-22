import express from "express";
import "dotenv/config";

import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import connectToDB from "./src/config/connectDB";

import router from "./src/routes/configRouter";

// for socket io

import http from "http";
import { Server } from "socket.io";

import socketConnect from "./src/socketConnect/socketConnect";

const app = express();

let PORT =
  process.env.NODE_ENV === "production"
    ? process.env.PORT_MAIN
    : process.env.PORT_DEV;

const server = http.createServer(app);
// middlewares API
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "http://127.0.0.1:3000",
      "https://lions-o93d.vercel.app",
      "https://reception-ower-lions-mfua.vercel.app"
    ],
    credentials: true,
  })
);

const io = new Server(server, {
  cors: { origin: ["http://localhost:3001", "https://lions-o93d.vercel.app","https://reception-ower-lions-mfua.vercel.app"], methods: ["GET", "POST", "PUT"] },
});

socketConnect(io)

app.use(cookieParser());
app.use(morgan());
app.use(express.json());

app.use("/api/v1", router);



server.listen(PORT, () => {
  connectToDB();
  console.log(`At the port: http://localhost:${PORT}`);
});
