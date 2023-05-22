import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { JwtPayload } from "jsonwebtoken";
import { RequestExt } from "../interfaces/req-ext.interface";

const checkJWT = (req: RequestExt, res: Response, next: NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization || ''
        const jwt = jwtByUser.split(' ').pop()
        // console.log('session', jwt)

        const isUser = verifyToken(`${jwt}`)
        // console.log('sessionOk', isUser)
       
        if (!isUser) {
            res.status(401)
            res.send('INVALID_TOKEN')
        } else {
            req.user = isUser
            next()
        }
    } catch (e) {
        res.status(400)
        res.send('INVALID_SESSION')
    }
}

export { checkJWT }