<<<<<<< HEAD:api/src/models/User.ts
import {
    Table,
    Column,
    Model,
    CreatedAt,
    UpdatedAt,
    HasMany,
    PrimaryKey,
    AutoIncrement,
    AllowNull,
    DeletedAt,
} from 'sequelize-typescript';
import Hobby from './Hobby';

enum Role {
    ADMIN = 'ADMIN',
    DRIVER = 'DRIVER',
    ASSISTANT = 'ASSISTANT',
    AUXILIARY = 'AUXILIARY',
}

@Table({
    tableName: 'users',
    timestamps: true,
})
export class User extends Model<User> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id?: number;

    @AllowNull(false)
    @Column
    name?: string;

    @AllowNull(false)
    @Column
    lastname?: string;

    @AllowNull(false)
    @Column({
        unique: true, // Declarar el campo como único
      })
    email?: string;

    @AllowNull(false)
    @Column
    password?: string;
    
    @AllowNull(false)
    @Column
    rut?: string;

    @AllowNull(false)
    @Column
    state?: boolean;

    @AllowNull(false)
    @Column
    online?: boolean;

    @CreatedAt
    @Column
    createdAt?: Date;

    @UpdatedAt
    @Column
    updatedAt?: Date;

    @HasMany(() => Hobby)
    hobbies?: Hobby[];
}

export default User;
=======
import {
    Table,
    Column,
    Model,
    CreatedAt,
    UpdatedAt,
    PrimaryKey,
    AutoIncrement,
    AllowNull,
    HasMany,
} from 'sequelize-typescript';

import User from './User';

@Table({
    tableName: 'distributors',
    timestamps: true,
})
export default class Distributor extends Model<Distributor> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id?: number;

    @AllowNull(false)
    @Column
    name?: string;

    @AllowNull(false)
    @Column
    rut?: string;

    @AllowNull(false)
    @Column
    direction?: string;

    @AllowNull(false)
    @Column
    subscription?: string;
    
    @AllowNull(false)
    @Column
    phone?: string;

    @AllowNull(false)
    @Column
    email?: string;

    @CreatedAt
    @Column
    createdAt?: Date;

    @UpdatedAt
    @Column
    updatedAt?: Date;

    @HasMany(() => User)
    users?: Array<User>;
}
>>>>>>> origin/master:api/src/models/personal_models/Distributor.ts
