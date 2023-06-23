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
    tableName: 'auxiliar',
    timestamps: true,
})
export class Auxiliar extends Model<Auxiliar> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id?: number;

    @Column
    in_order?: boolean;

    @HasOne(() => User)
    user?: User;

    @ForeignKey(() => Order)
    @Column
    order_id?: number;

    @BelongsTo(() => Order)
    order?: Order;
}

export default Auxiliar;