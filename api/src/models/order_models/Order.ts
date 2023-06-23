import {
    Table,
    Column,
    Model,
    CreatedAt,
    UpdatedAt,
    PrimaryKey,
    AutoIncrement,
    AllowNull,
    HasOne,
} from 'sequelize-typescript';

import Admin from '../personal_models/Admin';
import Driver from '../personal_models/Driver';
import Auxiliar from '../personal_models/Auxiliar';
import Account from './Account';

@Table({
    tableName: 'order',
    timestamps: true,
})
export class Order extends Model<Order> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id?: number;

    @AllowNull(false)
    @Column
    date?: Date;

    @AllowNull(false)
    @Column
    active?: boolean;

    @AllowNull(false)
    @Column
    paid?: boolean;

    @Column
    closed_by?: string;

    @CreatedAt
    @Column
    createdAt?: Date;

    @UpdatedAt
    @Column
    updatedAt?: Date;

    @HasOne(() => Admin)
    admin?: Admin;

    @HasOne(() => Driver)
    driver?: Driver;

    @HasOne(() => Auxiliar)
    auxiliar?: Auxiliar;

    @HasOne(() => Account)
    account?: Account;

}

export default Order;