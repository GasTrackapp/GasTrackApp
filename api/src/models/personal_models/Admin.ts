import {
    Table,
    Column,
    Model,
    PrimaryKey,
    ForeignKey,
    AutoIncrement,
    HasOne,
    BelongsTo
} from 'sequelize-typescript';

import User from './User';
import Order from '../order_models/Order';

@Table({
    tableName: 'admin',
    timestamps: true,
})
export class Admin extends Model<Admin> {
    
    @PrimaryKey
    @AutoIncrement
    @Column
    id?: number;

    @HasOne(() => User)
    user?: User;

    @ForeignKey(() => Order)
    @Column
    order_id?: number;

    @BelongsTo(() => Order)
    order?: Order;
}

export default Admin;