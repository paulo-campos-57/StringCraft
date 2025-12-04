import { Router } from 'express';
const router = Router();
import { reverseString } from '../controllers/text.controller.js';

router.post('/reverse', reverseString);

export default router;