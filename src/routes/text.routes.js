import { Router } from 'express';
const router = Router();
import { reverseStringController, generateCPFController, cipherStringController, decipherStringController } from '../controllers/text.controller.js';

router.post('/reverse', reverseStringController);
router.get('/generate-cpf', generateCPFController);
router.post('/caesar-cipher', cipherStringController);
router.post('/caesar-decipher', decipherStringController);

export default router;