import { where } from 'sequelize';
import { User } from '../../models/personal_models/User';
import { Response, Request, NextFunction } from 'express';
import { comparePassword, hashPassword } from '../../utils/hashPassword';
import { createJWT } from '../../utils/jwt';

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
            const user: User|null = await User.findOne({ where: {email}});
            if (user && user.password) {
                const isCorrectPassword = comparePassword(password, user.password);
                if (isCorrectPassword) {
                    const token = createJWT({
                        id: user.id,
                        name: user.name,
                        rol: user.rol
                    });
                    return res.status(200).json({ token, message: 'User login successfully' });
                } else{
                    return res.status(401).json({ message: 'Invalid password' });
                }
            } else{
                return res.status(401).json({ message: 'Invalid email' });
            }
        } catch (error) {
            console.error('Authentication error:', error);
        }
    }
}