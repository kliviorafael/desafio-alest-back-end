/**Importações */
import * as admin from "firebase-admin";
const db = admin.firestore();

import { Client, messageTratment } from "../../interface/exportInterface";
import { messageTreatmentBusiness } from '../../business/exportBusiness'

/**
 * @class ClientDatasource
 * @description Responsável pela comunicação com o banco de dados
 */
class ClientDatasource {

    getClientById = async (idClient: string): Promise<messageTratment> => {
        const collection =  db.collection('flores');
        return await collection
            .doc(idClient)
            .get()
            .then(async (result) => {
                return messageTreatmentBusiness.sucessMsg(`Flor encontrada`, result.data());
            })
            .catch((error) => {
                return messageTreatmentBusiness.errorMsg('Falha ao buscar cliente, tente novamente', Error );   
            })   
    }
    
    getClients = (): messageTratment => {
        let client: Client = {id: '1', name: "Rosa", quantidade: 20};
        return messageTreatmentBusiness.sucessMsg('Alguns clientes foram encontrados',client); 
    }

    postClients = async (client: Client): Promise<messageTratment> => {
        
        /** criando cliente */
        let setDoc = await db.collection('flores').doc().set(client);
        return messageTreatmentBusiness.sucessMsg(`Flor ${client.name} adicionada`, setDoc); 
    }

    putClients = async (idClient: string, client: Client): Promise<messageTratment> => {
        
        /** alterando cliente */
        let setDoc = await db.collection('flores').doc(idClient).set(client);
        return messageTreatmentBusiness.sucessMsg(`Flor ${client.name} alterado`, setDoc); 
    }

    deleteClients = async (idClient : string): Promise<messageTratment> => {
        return db.collection('flores')
            .doc(idClient)
            .delete()
            .then(function() {
                return messageTreatmentBusiness.sucessMsg(`Flor com id ${idClient} deletada`);
            }).catch(function(error) {
                return messageTreatmentBusiness.errorMsg('Falha ao buscar cliente, tente novamente', Error ); 
            });
        
    }

}

export const clientDatasource= new ClientDatasource(); 