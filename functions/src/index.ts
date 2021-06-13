/** Inicializando Banco de dados */
import * as admin from "firebase-admin";
const serviceAccount = require("../src/config/back-end-firebase-74e2f-firebase-adminsdk-jsnas-35d80cf401");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://back-end-firebase-74e2f-default-rtdb.firebaseio.com"
});

/** Importações */
import * as functions from "firebase-functions";
import * as express from 'express'; 
import { clientController } from './controller/exportControllers';

/** APPS */
let appClients = express(); 


/** Rota Clients */
appClients.get('/:idClient',async (req, res) => {res.json(await clientController.getClientById(req.params.idClient)) });
appClients.route('/')
    .get((req, res) => { res.json (clientController.getClients()) })
    .post(async (req, res) => { res.json (await clientController.postClients(req.body)) })
    .put(async (req, res) => { res.json (await clientController.putClients(req.body)) })
    .delete(async (req, res) => { res.json (await clientController.deleteClients(req.body.id)) });


/** Exports apps */
exports.clients = functions.https.onRequest(appClients); 
    
