import { User } from "../models/User";
import { comparePassword } from "./hashPassword";
import { createJWT, verifyJWT } from "./jwt";


export async function authenticate(email:string, password:string) {
    const user: User|null = await User.findOne({ where: {email}});
    if(user?.password){
        const isCorrectPassword = comparePassword(password, user.password)
        if (!isCorrectPassword) {
            return;
        }
        const token = createJWT({
            id: user.id,
            name: user.name,
        })
        return token
    }
}