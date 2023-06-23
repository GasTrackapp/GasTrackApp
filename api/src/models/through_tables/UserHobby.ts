import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import User from '../personal_models/User';
import Hobby from '../Hobby';

@Table({
    tableName: 'user_hobbies',
    timestamps: false,
})
export class UserHobby extends Model<UserHobby> {
    
    @ForeignKey(() => User)
    @Column
    userId?: number;

    @ForeignKey(() => Hobby)
    @Column
    hobbyId?: number;
}

export default UserHobby;