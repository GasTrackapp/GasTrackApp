<<<<<<< HEAD
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
=======
// import { User } from '../models/User';
// import { Hobby } from '../models/Hobby';
import { models } from '../db';

const { User, Hobby } = models;

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
            rol: 'admin',
            distributor_name: 'Distribuidora Jhoskar',
        },
        {
            name: 'Miguel',
            lastname: 'Viloria',
            email: 'miguelviloria@gmail.com',
            password: '123456',
            rut: '123456789',
            state : true,
            online: false,
            rol: 'driver',
            distributor_name: 'Distribuidora Miguel',
        }
    ];

    for (const user of users) {
        
        const newUser = await User.create(user);

        const hobbies = await Hobby.findAll();

        //le asignamos un hobby a cada usuario de forma aleatoria
        const randomHobby = Math.floor(Math.random() * hobbies.length);

        await (newUser as any).addHobby(hobbies[randomHobby]);
    }
};

export const seedHobbies = async () => {

    const hobbies = [
        {
            name: 'Futbol',
        },
        {
            name: 'Programar',
        },
        {
            name: 'Videojuegos',
        },
        {
            name: 'Leer',
        }
    ];

    for (const hobby of hobbies) {
        await Hobby.create(hobby);
    }
}
>>>>>>> origin/master
