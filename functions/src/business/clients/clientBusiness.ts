/** Importações */
import { clientDatasource } from '../../datasource/exportDataSouce'
import { Client } from '../../interface/exportInterface';

/**
 * @class ClientBusiness
 * @classdesc Esta classe é resposável pelas regras de negócio da API
 */
class ClientBusiness {

    getClientById = (idClient: string) => {
        return clientDatasource.getClientById(idClient); 
    }
    
    getClients = () => {
        return clientDatasource.getClients(); 
    }

    postClients = (client: Client) => {
        return clientDatasource.postClients(client); 
    }

    putClients = (client: Client) => {
        /** deletando o id do client para não ir ao banco no update*/
        const idClient = client.id; 
        delete client.id; 
        return clientDatasource.putClients(idClient,client); 
    }

    deleteClients = (idClient: string) => {
        return clientDatasource.deleteClients(idClient); 
    }

}

export const clientBusiness = new ClientBusiness(); 