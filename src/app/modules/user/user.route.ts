import express from 'express';
import { userController } from './user.controller';

const router = express.Router();

router.post('/create-user', userController.createUser);
router.post('/', userController.getAllUsers);
router.post('/:userId', userController.getAllUsers);

export const userRoutes = router;
