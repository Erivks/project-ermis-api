import BusinessModel from "../../modules/business/model/BusinessModel.js";
import ResponsibleModel from "../../modules/responsible/model/ResponsibleModel.js";
import { LOG_LEVEL } from '../../../../../common/constants/main.js'
import logger from '../../../../../common/functions/logger.js';

try {
    await BusinessModel.sync();
    await ResponsibleModel.sync();
} catch (error) {
    logger(LOG_LEVEL.LOG_ERR, error.message);
}
