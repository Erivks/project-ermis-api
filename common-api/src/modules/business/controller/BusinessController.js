import BusinessService from "../service/BusinessService.js";
import logger from "../../../../../../common/functions/logger.js";
import { HTTP_CODE, LOG_LEVEL } from "../../../../../../common/constants/main.js";

class BusinessController {
    async findAll(req, res) {
        logger(LOG_LEVEL.LOG_INFO, "Running BusinessController::findAll");
        
        try {
            let result = await BusinessService.findAll();
            return res.status(result.status).json(result);
        } catch (error) {
            logger(LOG_LEVEL.LOG_ERR, error.message);
            let status = error.status || HTTP_CODE.INTERNAL_SERVER_ERROR;
            return res.status(status).json({
                status: status,
                message: error.message
            });
        }

    }

    async findByID(req, res) {
        logger(LOG_LEVEL.LOG_INFO, "Running BusinessController::findByID");

        try {
            const result = await BusinessService.findByID(req.params.id);
            logger(LOG_LEVEL.LOG_INFO, `Returning data: ${JSON.stringify(result)}`);
            return res.status(result.status).json(result); 
        } catch (error) {
            logger(LOG_LEVEL.LOG_ERR, error.message);
            let status = error.status || HTTP_CODE.INTERNAL_SERVER_ERROR;
            return res.status(status).json({
                status: status,
                message: error.message
            });
        }
    }

    async create(req, res) {
        logger(LOG_LEVEL.LOG_INFO, "Running BusinessController::create");

        try {           
            let result = await BusinessService.create(req);
            return res.status(result.status).json({
                status: result.status,
                message: result.message || "Created Successfully!"
            });
            
        } catch (error) {
            logger(LOG_LEVEL.LOG_ERR, error.message);
            let status = error.status || HTTP_CODE.INTERNAL_SERVER_ERROR;
            return res.status(status).json({
                status: status,
                message: error.message
            });
        }
    }
}

export default new BusinessController();