import mongoose from "mongoose"


const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

const connectToDB = async () => {
  if (process.env.NODE_ENV === 'production') {
    console.log("in case production")
    mongoose.connect(process.env.DB_URL_MAIN, { useNewUrlParser: true, useUnifiedTopology: true });
  } else {
    console.log("in case dev")
    mongoose.connect(process.env.DB_URL_DEV, { useNewUrlParser: true, useUnifiedTopology: true });
  }


}

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB Disconnected!")
})

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected!")
})




export default connectToDB

