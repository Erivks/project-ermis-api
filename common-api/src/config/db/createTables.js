import BusinessModel from "../../modules/business/model/BusinessModel.js";
import { LOG_LEVEL } from '../../../../../common/constants/main.js'
import logger from '../../../../../common/functions/logger.js';

try {
    await BusinessModel.sync();
} catch (error) {
    logger(LOG_LEVEL.LOG_ERR, error.message);
}
