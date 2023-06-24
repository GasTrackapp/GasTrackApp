<<<<<<< HEAD
import {
    Table,
    Column,
    Model,
    CreatedAt,
    UpdatedAt,
    DeletedAt,
    PrimaryKey,
    AutoIncrement,
    AllowNull,
    ForeignKey,
    BelongsTo,
} from 'sequelize-typescript';

import User from './User';

@Table({
    tableName: 'hobby',
    timestamps: true,
    paranoid: true
})
export class Hobby extends Model<Hobby> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id?: number;

    @AllowNull(false)
    @Column
    name?: string;

    @CreatedAt
    @Column
    createdAt?: Date;

    @UpdatedAt
    @Column
    updatedAt?: Date;

    @DeletedAt
    @Column
    deletedAt?: Date;

    @ForeignKey(() => User)
    @Column
    userId?: number;

    @BelongsTo(() => User)
    user?: User;
}

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
    BelongsToMany
} from 'sequelize-typescript';

import User from './personal_models/User';
import UserHobby from './through_tables/UserHobby';

@Table({
    tableName: 'hobby',
    timestamps: true,
})
export class Hobby extends Model<Hobby> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id?: number;

    @AllowNull(false)
    @Column
    name?: string;

    @CreatedAt
    @Column
    createdAt?: Date;

    @UpdatedAt
    @Column
    updatedAt?: Date;

    @BelongsToMany(() => User, () => UserHobby)
    users?: User[];
}

>>>>>>> origin/master
export default Hobby;