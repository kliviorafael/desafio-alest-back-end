/** Importações */
import { clientBusiness }  from '../../business/exportBusiness'
import { Client } from '../../interface/exportInterface';

/**
 * @class ClientController
 * @description Responsável pel controle do fluxo da API
 */

class ClientController {

    getClientById = (idClient: string) => {
        return clientBusiness.getClientById(idClient); 
    }
    
    getClients = () => {
        return clientBusiness.getClients(); 
    }

    postClients = (client: Client) => {
        return clientBusiness.postClients(client); 
    }

    putClients = (client: Client) => {
        return clientBusiness.putClients(client); 
    }

    deleteClients = (idClient: string) => {
        return clientBusiness.deleteClients(idClient); 
    }

}

export const clientController = new ClientController(); 