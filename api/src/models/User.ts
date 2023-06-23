import {
    Table,
    Column,
    Model,
    CreatedAt,
    UpdatedAt,
    PrimaryKey,
    AutoIncrement,
    AllowNull,
    BelongsToMany,
} from 'sequelize-typescript';
import Hobby from './Hobby';
import UserHobby from './through_tables/UserHobby';

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
    @Column
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

    @BelongsToMany(() => Hobby, () => UserHobby)
    hobbies?: Array<Hobby & { UserHobby: UserHobby }>;
}

export default User;