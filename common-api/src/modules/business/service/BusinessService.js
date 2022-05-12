import ApiException from '../../../../../../common/exceptions/ApiException.js';
import BusinessRepository from '../repository/BusinessRepository.js';
import { validationResult } from "express-validator";
import { HTTP_CODE, LOG_LEVEL } from '../../../../../../common/constants/main.js';
import logger from '../../../../../../common/functions/logger.js';

class BusinessService {
    async findAll() {
        logger(LOG_LEVEL.LOG_INFO, "Running BusinessService::findAll");
        
        let result = await BusinessRepository.findAll();
        if (!result) {
            throw new ApiException(
                HTTP_CODE.INTERNAL_SERVER_ERROR, 
                "Unable to get business data!"
            );
        }
        return {
            status: HTTP_CODE.OK,
            result
        }
    }

    async create(req) {
        logger(LOG_LEVEL.LOG_INFO, "Running BusinessService::create");

        const body = this.validateRequest(req);
        await BusinessRepository.create(body); 
        return { status: HTTP_CODE.OK };    
    }

    validateRequest(req) {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            throw new ApiException(
                HTTP_CODE.BAD_REQUEST,
                errors.mapped()
            );
        }

        if (!req.body) {
            throw new ApiException(
                HTTP_CODE.BAD_REQUEST,
                "Body is empty"
            );
        }

        return req.body;

    }
}

export default new BusinessService();