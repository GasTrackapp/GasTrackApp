import {Response, Request, Router} from 'express';
import UserController from './userController'
const router = Router();

const userController = new UserController();

router.get('/', async (req: Request, res: Response) => {
    const users = await userController.getAllUsers();
    res.status(200).json(users);
});

router.post('/', (req: Request, res: Response) => {
 res.send('soy la ruta post!');
});

export default router;