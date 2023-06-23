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

import User from './User';
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

export default Hobby;