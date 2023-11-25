import express from 'express';
import { userController } from './user.controller';

const router = express.Router();

router.get('/', userController.getAllUsers);
router.post('/create-user', userController.createUser);
router.get('/:userId', userController.getSingleUser);
router.delete('/:userId', userController.deleteSingleUser);
router.put('/:userId', userController.updateSingleUser);

export const userRoutes = router;
