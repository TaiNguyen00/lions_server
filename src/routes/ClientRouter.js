import { Router } from "express";
import { addClient, deleteClient,  getAllClient,getClientById, updateClient } from "../controllers/Client";

const ClientRouter = Router()
ClientRouter.get('/getAll', getAllClient)
ClientRouter.get('/getID/:id', getClientById)
ClientRouter.post('/add-Client', addClient)
ClientRouter.put('/edit-Client/:id', updateClient)
ClientRouter.delete('/delete-Client/:id', deleteClient)
module.exports = ClientRouter