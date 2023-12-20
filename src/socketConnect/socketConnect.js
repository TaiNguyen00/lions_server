import { editRoomStatusForSocket } from "../controllers/RoomController"
const socketConnect = (io) => {
  io.on('connection', (socket) => {
    console.log(`Người dùng đã kết nối: ${socket.id} `)

    socket.on("joinRoom", (room) => {
      console.log("check join room", room) // kiểu number
      socket.join(room) 
    })

    socket.on("updateRoomStatusInfo", async (data) => {
      try { 
        const editedUpdateRoom =  await editRoomStatusForSocket(data)

        if (editedUpdateRoom) {
          io.to(data.currentRoom).emit("roomStatusUpdated", data)
        }
      } catch (err) {
        console.log("error from socketio", err)
      }
      
    })
  })

}

export default socketConnect