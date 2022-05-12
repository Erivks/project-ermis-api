import { Router } from 'express';
import BusinessController from '../controller/BusinessController.js';
import BusinessValidator from '../validator/BusinessValidator.js';

const router = new Router();

//== CREATE ==
router.post('/api/business/create', BusinessValidator.create(), BusinessController.create);

//== READ ==
router.get('/api/business/findAll', BusinessController.findAll);
router.get('/api/business/findByID/:id', BusinessValidator.byID(), BusinessController.findByID);

//== UPDATE ==
router.put('/api/business/updateByID/:id', BusinessValidator.byID(), BusinessController.updateByID);
router.put('/api/business/updateByCNPJ/:cnpj', BusinessValidator.byCNPJ(), BusinessController.updateByCNPJ);

export default router;