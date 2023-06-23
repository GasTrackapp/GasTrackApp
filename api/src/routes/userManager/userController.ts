import { User } from '../../models/personal_models/User';
import { Hobby } from '../../models/Hobby';

export default class UserController {
    
    async getAllUsers(): Promise<User[]> {
        
        const users = await User.findAll({
            attributes: { exclude: ['createdAt', 'updatedAt'] },
            include: [
                {
                    model: Hobby
                },
            ],
        });
        return users;
    }

    async createUser(user: User): Promise<User> {
        const newUser = await User.create(user);
        return newUser;
    }
}