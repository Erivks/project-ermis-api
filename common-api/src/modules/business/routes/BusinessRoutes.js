import { Router } from 'express';
import BusinessController from '../controller/BusinessController.js';
import BusinessValidator from '../validator/BusinessValidator.js';

const router = new Router();
const baseUrl = "/api/business";

//== CREATE ==
router.post(`${baseUrl}/create`, BusinessValidator.create(), BusinessController.create);

//== READ ==
router.get(`${baseUrl}/findAll`, BusinessController.findAll);
router.get(`${baseUrl}/findByID/:id`, BusinessValidator.byID(), BusinessController.findByID);

//== UPDATE ==
// TODO: Validar endpoints
router.put(`${baseUrl}/updateByID/:id`, BusinessValidator.byID(), BusinessController.updateByID);
router.put(`${baseUrl}/updateByCNPJ/:cnpj`, BusinessValidator.byCNPJ(), BusinessController.updateByCNPJ);

//== DELETE ==
// TODO: Desenvolver endpoints de delete
export default router;