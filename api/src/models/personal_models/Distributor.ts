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
