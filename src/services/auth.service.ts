import { Auth } from "../interfaces/auth.interface"
import { User } from "../interfaces/user.interface"
import UserModel from "../models/user.model"
import { encript, verify } from "../utils/bcript.handle"
import { generateToken } from "../utils/jwt.handle"

const register = async (user: User) => {
    const checkIsExist = await UserModel.findOne({email: user.email})
    if (checkIsExist) return 'USER_ALREADY_EXIST'

    const passHash = await encript(user.password)
    const userCreate = await UserModel.create({email: user.email, password: passHash, name: user.name})
    return userCreate
}

const login = async (auth: Auth) => {
    const checkIsExist = await UserModel.findOne({email: auth.email})
    if (!checkIsExist) return 'USER_NOT_FOUND'

    const passHash = checkIsExist.password    
    const passOk = await verify(auth.password, passHash)
    if (!passOk) return 'INCORRECT_PASSWORD'

    const token = generateToken(checkIsExist.email)
    const UserOk = {
        token,
        user: {
            id: checkIsExist.id,
            name: checkIsExist.name,
            email: checkIsExist.email
        }
    }

    return UserOk
}

export { register, login }