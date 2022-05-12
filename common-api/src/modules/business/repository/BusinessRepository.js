import BusinessModel from "../model/BusinessModel.js";
import ApiException from '../../../../../../common/exceptions/ApiException.js';
import logger from '../../../../../../common/functions/logger.js';
import { HTTP_CODE, LOG_LEVEL } from "../../../../../../common/constants/main.js";

class BusinessRepository {
    async findAll() {
        try {
            logger("INFO", "Running BusinessRepository::findAll");        
            return await BusinessModel.findAll();
        } catch (error) {
            throw new ApiException(
                HTTP_CODE.INTERNAL_SERVER_ERROR,
                error.message
            );
        }
    }

    async create(body) {
        try {
            await BusinessModel.create(body);
        } catch (error) {
            logger(LOG_LEVEL.LOG_ERR, error.message);
            throw new ApiException(
                HTTP_CODE.INTERNAL_SERVER_ERROR,
                error.message
            );
        }
    }
}

export default new BusinessRepository();