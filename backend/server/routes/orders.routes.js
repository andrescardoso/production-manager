import {Router} from 'express';
const router = Router();
import {getOrders, createOrder, updateOrder, deleteOrder, getOrder} from '../controllers/orders.controllers.js';

router.get('/orders', getOrders)
router.post('/orders', createOrder)
router.put('/orders/:id', updateOrder)
router.delete('/orders/:id', deleteOrder)
router.get('/orders/:id', getOrder)

export default router;