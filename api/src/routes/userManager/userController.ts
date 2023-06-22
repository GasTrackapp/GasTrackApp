import { User } from '../../models/User';

export default class UserController {
    
    async getAllUsers(): Promise<User[]> {
        
        //traigo a todos los usuarios a excepcion de los timestamps
        const users = await User.findAll({
            attributes: { exclude: ['createdAt', 'updatedAt'] }
        });
        return users;
    }

    async createUser(user: User): Promise<User> {
        const newUser = await User.create(user);
        return newUser;
    }
}