import BusinessModel from "../../modules/business/model/BusinessModel.js";
import logger from '../../../../../common/functions/logger.js';

export default async function seed() {
    try {
        await BusinessModel.sync();
        
        BusinessModel.create({
            cnpj: "12345678910112",
            name: "Demo",
            address: "Rua Carlos Henrique",
            number: "11",
            district: "Miguel Couto",
            city: "Nova Iguaçu",
            state: "RJ",
            complement: "Atrás da Clinica da Familia"
        });
    } catch (error) {
        logger("ERROR", error.message);
    }
}