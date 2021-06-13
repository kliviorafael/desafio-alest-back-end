/** Importações */
import { messageTratment } from '../../interface/exportInterface';


/**
 * @class MessageTreatmentBusiness
 * @description Responsável pelas mensagens e comunicação de processos com o usuário
 */
class  MessageTreatmentBusiness {

    sucessMsg = (mensagem: string, response?: any): messageTratment => {
        let _mensagem: messageTratment = {message: `Sucesso: ${mensagem}`, status: 200, response: response}; 
        console.log(_mensagem);
        return _mensagem;
    }

    infoMsg = (mensagem: string, info?: any) => {
        let _mensagem: messageTratment = {message: `Info: ${mensagem}`, status: 250, response: info}; 
        return _mensagem;
    }

    errorMsg = (mensagem: string, error?: any) => {
        let _mensagem: messageTratment = {message: `Error: ${mensagem}`, status: 400, response: error}; 
        return _mensagem;
    }

}

export const  messageTreatmentBusiness = new MessageTreatmentBusiness(); 