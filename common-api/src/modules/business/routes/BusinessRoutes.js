import { Router } from 'express';
import BusinessController from '../controller/BusinessController.js';
import BusinessValidator from '../validator/BusinessValidator.js';

const router = new Router();

//== CREATE ==
router.post('/api/business/create', BusinessValidator.create(), BusinessController.create);

//== READ ==
router.get('/api/business/findAll', BusinessController.findAll);
router.get('/api/business/findByID/:id', BusinessValidator.findByID(), BusinessController.findByID);

//== UPDATE ==
router.put('/api/business/updateByID/:id', BusinessController.updateByID);

export default router;