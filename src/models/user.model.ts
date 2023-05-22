import { Schema, Types, model, Model} from "mongoose"
import { User } from "../interfaces/user.interface"

const UserSchema = new Schema<User>(
    {
        email: {
            type: String,
            require: true,
            unique: true
        },
        password: {
            type: String,
            require: true
        },
        name: {
            type: String,
            require: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const UserModel = model('users', UserSchema)
export default UserModel