import { where } from 'sequelize';
import { User } from '../../models/User';
import { Response, Request, NextFunction } from 'express';
import { hashPassword } from '../../utils/hashPassword';
import { authenticate } from '../../utils/auth'

export default class UserController {
    
    public allUsers =async (
        _req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const users = await User.findAll({
                attributes: { exclude: ['createdAt', 'updatedAt'] }
            });
            return res.status(200).json(users);
        } catch (error) {
            return res.status(400).json({
                message: "Error en userController",
                error
            });
        } 
    }

    public register = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const user: User = req.body;
            if(typeof user.password === 'string'){
                user.password = hashPassword(user.password);
            };
            const newUser = await User.create(user);     
            return res.status(200).json({ user: newUser, message: 'User registered successfully' });
        } catch (error) {
            return res.status(500).json({ message: 'Error creating user', error });
        }
    }

    public login = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        const { email, password } = req.body;
        try {
            const token = await authenticate(email, password)
            console.log('token', token)
            return res.status(200).json({ token, message: 'User login successfully' });
        } catch (error) {
            return res.status(500).json({ message: 'Error login user', error });
        }
        
    }
}