import express, { json } from 'express';
const app = express();
import mainRoutes from './routes/index.js';

app.use(json());

app.use(mainRoutes);

app.use('/api/v1', mainRoutes);

export default app;