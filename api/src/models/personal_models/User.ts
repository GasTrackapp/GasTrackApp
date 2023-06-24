import {
    Table,
    Column,
    Model,
    CreatedAt,
    UpdatedAt,
    PrimaryKey,
    ForeignKey,
    AutoIncrement,
    AllowNull,
    BelongsToMany,
    BelongsTo
} from 'sequelize-typescript';
import Hobby from '../Hobby';
import Distributor from './Distributor';
import Admin from './Admin';
import Driver from './Driver';
import Auxiliar from './Auxiliar';
import UserHobby from '../through_tables/UserHobby';

enum Rol {
    ADMIN = 'admin',
    DRIVER = 'driver',
    AUXILIAR = 'auxiliar'
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

    @AllowNull(false)
    @Column
    rol?: Rol;

    @AllowNull(false)
    @Column
    distributor_name?: string;

    @CreatedAt
    @Column
    createdAt?: Date;

    @UpdatedAt
    @Column
    updatedAt?: Date;

    @BelongsToMany(() => Hobby, () => UserHobby)
    hobbies?: Array<Hobby & { UserHobby: UserHobby }>;

    @ForeignKey(() => Distributor)
    @Column
    distributor_id?: number;

    @BelongsTo(() => Distributor)
    distributor?: Distributor;

    @ForeignKey(() => Admin)
    @Column
    admin_id?: number;

    @BelongsTo(() => Admin)
    admin?: Admin;

    @ForeignKey(() => Driver)
    @Column
    driver_id?: number;

    @BelongsTo(() => Driver)
    driver?: Driver;

    @ForeignKey(() => Auxiliar)
    @Column
    auxiliar_id?: number;

    @BelongsTo(() => Auxiliar)
    auxiliar?: Auxiliar;
}

export default User;