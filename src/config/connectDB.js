import mongoose from "mongoose"


const connectionParams={
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true 
}

const connectToDB = async() => {
  mongoose.connect(process.env.DB_URL,connectionParams)
  .then( () => {
      console.log('Connected to the database ')
  })
  .catch( (err) => {
      console.error(`Error connecting to the database. n${err}`);
  })
}

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB Disconnected!")
})

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected!")
})




export default connectToDB