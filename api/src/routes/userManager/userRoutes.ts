import { Router } from 'express';
import UserController from './userController'
const router = Router();
const userController = new UserController();

router.get('/', userController.allUsers);
router.post('/register', userController.register);
router.post('/login', userController.login)

export default router;