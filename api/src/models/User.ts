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