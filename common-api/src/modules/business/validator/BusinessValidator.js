import { body } from 'express-validator';
import { LOG_LEVEL } from '../../../../../../common/constants/main.js';
import logger from '../../../../../../common/functions/logger.js';

class BusinessValidator {
    create() {
        logger(LOG_LEVEL.LOG_INFO, "Running BusinessValidator::create");
        return [
            body('cnpj')
                .isString()
                .withMessage('CNPJ must be a string')
                .isLength({ min: 14 })
                .withMessage('CNPJ must be 14 chars')
                .notEmpty()
                .withMessage('CNPJ must be informed'),
            body('name')
                .isString()
                .withMessage('name must be a string')
                .isLength({ min: 1, max: 200 })
                .withMessage("Length's name must be: [min: 1, max: 200]")
                .notEmpty()
                .withMessage('name must be informed'),
            body('address')
                .isString()
                .isLength({ min: 5, max: 200 })
                .notEmpty(),
            body('number')
                .isString()
                .isLength({ max: 10 })
                .notEmpty(),
            body('district')
                .isString()
                .isLength({ max: 100 })
                .notEmpty(),
            body('city')
                .isString()
                .isLength({ max: 100 })
                .notEmpty(),
            body('state')
                .isString()
                .isLength({ min: 2 })
                .notEmpty(),
            body('complement')
                .isString()
                .isLength({ max: 150 })
                .optional()
        ];
    }    
}

export default new BusinessValidator();