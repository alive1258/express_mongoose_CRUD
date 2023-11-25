import express from 'express';
import { orderController } from './order.controller';

const router = express.Router();

router.put('/:userId/orders', orderController.addProductToOrder);
router.get('/:userId/orders', orderController.getAllOrders);

export const userRoutes = router;
