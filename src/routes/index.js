import { Router } from 'express';
const router = Router();
import textRoutes from './text.routes.js';

router.use('/text', textRoutes);

export default router;