import { Router } from 'express';
const router = Router();
import textRoutes from './text.routes.js';

router.get('/', (req, res)=> {
    res.status(200).json({
        message: "Bem vindo ao StringCraft!",
        version: "1.0"
    })
})

router.use('/text', textRoutes);

export default router;