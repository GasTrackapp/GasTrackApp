import { where } from 'sequelize';
import { User } from '../../models/personal_models/User';
import { Response, Request, NextFunction } from 'express';
import { comparePassword, hashPassword } from '../../utils/hashPassword';
import { createJWT, verifyJWT } from '../../utils/jwt';
import { emailForgotPassword } from '../../utils/email';

interface TokenPayload {
    id: string;
    name: string;
}

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
                const newUser = await User.create(user);     
                return res.status(200).json({ user: newUser, message: 'User registered successfully' });
            } else{
                return res.status(401).json({ message: 'Invalid password' });
            }
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
            return res.status(500).json({ message: 'Authentication error:', error });
        }
    }

    public recoveryPassword = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const { email } = req.body;
            const user: User|null = await User.findOne({ where: {email}});
            if(user && user?.name){
                const token = createJWT({
                    id: user.id,
                    name: user.name,
                })
                await emailForgotPassword({email, name: user.name}, token);
                return res.status(200).json({ token, message: 'Recovery password email send' });
            } else{
                return res.status(401).json({ message: 'Invalid email' });
            }
        } catch (error) {
            return res.status(500).json({ message: 'Recovery password error:', error });
        }
    }

    public changePassword =async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const { token } = req.params;
            const { password } = req.body;
            const userData = await verifyJWT(token);
            if (userData && (userData as TokenPayload).id) {
                const { id, name } = userData as TokenPayload;
                const user: User | null = await User.findOne({
                    where: { id },
                });
                if(user){
                    const newPassword = hashPassword(password);
                    user.password = newPassword
                    await user.save()
                    return res.status(200).json({ token, message: 'Password changed succesfully' });
                } else{
                    return res.status(401).json({ message: 'User not found' });
                }
            } else{
                return res.status(401).json({ message: 'Invalid token' });
            }
        } catch (error) {
            return res.status(500).json({ message: 'Change password error:', error });
        }
    }
}