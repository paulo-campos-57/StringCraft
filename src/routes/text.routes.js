import { Router } from 'express';
const router = Router();
import { reverseStringController, generateCPFController } from '../controllers/text.controller.js';

router.post('/reverse', reverseStringController);
router.get('/generate-cpf', generateCPFController);

export default router;