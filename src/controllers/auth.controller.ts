import { Request, Response } from 'express'
import { register, login } from '../services/auth.service'

const registerCtrl = async (req: Request, res: Response) => {
    const responseUser = await register(req.body)
    if (responseUser === 'USER_ALREADY_EXIST') {
        res.status(403)
    }
    res.send(responseUser)

}

const loginCtrl = async (req: Request, res: Response) => {
    const responseUser = await login(req.body)
    if (responseUser === 'USER_NOT_FOUND' || responseUser === 'INCORRECT_PASSWORD') {
        res.status(403)
    }
    res.send(responseUser)

}

export { registerCtrl, loginCtrl }
