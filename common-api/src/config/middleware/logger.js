import { LOG_LEVEL } from '../../../../../common/constants/main.js';
import logger from '../../../../../common/functions/logger.js';

export default function middlewareLogger(req, res, next) {
    logger(LOG_LEVEL.LOG_INFO, `Endpoint called: ${req.path}`);
    next();
}