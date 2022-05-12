import { Router } from 'express';
import BusinessController from '../controller/BusinessController.js';
import BusinessValidator from '../validator/BusinessValidator.js';

const router = new Router();

router.get('/api/business/findAll', BusinessController.findAll);
router.post('/api/business/create', BusinessValidator.create(), BusinessController.create);

export default router;