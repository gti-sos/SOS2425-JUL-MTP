import express from 'express';
import Datastore from 'nedb';
import { loadBackend_MTP } from './src/back/index.js';
import { handler } from "./src/front/build/handler.js";

const app = express();
app.use(express.json()); // Middleware para parsear JSON en las peticiones
const PORT = process.env.port || 16078;

const BASE_API = "/api/v1";
const RESOURCE_MTP = "management-evolutions";
const db_MTP = new Datastore();

loadBackend_MTP(app, db_MTP);


//app.use("/", express.static("./public")); // Servir archivos estáticos desde la carpeta public
//Una vez que empiezo a usar handler para Svelte ya no requiero usar mi contenido estático de public
app.use(handler);


app.listen(PORT, () =>{
    console.log(`Server is listening on port ${PORT}`);
}); //listen es asincrono de modo que tarda un pelin