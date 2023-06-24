import { models } from '../db';

const{ User } = models;

export const seedUsers = async () => {
    const users = [
        {
            name: 'Jhoskar',
            lastname: 'Toro',
            email: 'jhoskartoro@gmail.com',
            password: '123456',
            rut: '123456789',
            state : true,
            online: false,
        },
        {
            name: 'Miguel',
            lastname: 'Tovar',
            email: 'migueltovar@gmail.com',
            password: '123456',
            rut: '123456789',
            state : true,
            online: false,
        }
    ];

    for (const user of users) {
        await User.create(user);
    }
};
