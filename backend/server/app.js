import express from 'express';
import ordersRoutes from './routes/orders.routes.js';

const app = express();

app.use(express.json());
app.use(ordersRoutes);

export default app;