import { Router } from 'express';
import UserController from './userController'
import validationReqSchema from '../../middlewares/validations';
import { body, param } from 'express-validator';

const router = Router();
const userController = new UserController();

router.get('/', userController.allUsers);

router.post('/register',
    validationReqSchema([
        body('name').isString(),
        body('lastname').isString(),
        body('email').isEmail(), 
        body('password').isString(),
        body('rut').isString(),
        body('state').isBoolean(),
        body('online').isBoolean(),
        body('rol').isString(),
        body('distributor_name').isString()
    ]), 
    userController.register);

router.post('/login', 
    validationReqSchema([body('email').isEmail(), body('password').isString()]), 
    userController.login);

router.post('/recovery',
    validationReqSchema([body('email').isEmail()]), 
    userController.recoveryPassword);

router.put('/changePassword/:token',
    validationReqSchema([body('password').isString(), param('token').isJWT()]), 
    userController.changePassword);

export default router;