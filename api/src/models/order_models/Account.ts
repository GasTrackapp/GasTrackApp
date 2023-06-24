import {
    Table,
    Column,
    Model,
    CreatedAt,
    UpdatedAt,
    PrimaryKey,
    ForeignKey,
    AutoIncrement,
    BelongsTo
} from 'sequelize-typescript';

import Order from './Order';

@Table({
    tableName: 'account',
    timestamps: true,
})
export class Account extends Model<Account> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id?: number;

    @Column
    missin_driver?: number;

    @Column
    missin_auxiliar?: number;

    @Column
    surplus?: number;

    @Column
    missing_money?: number;

    @Column
    total_price?: number;

    @CreatedAt
    @Column
    createdAt?: Date;

    @UpdatedAt
    @Column
    updatedAt?: Date;

    @BelongsTo(() => Order)
    order?: Order;

    @ForeignKey(() => Order)
    @Column
    order_id?: number;
}

export default Account;