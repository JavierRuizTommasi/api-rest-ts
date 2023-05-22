import { sign, verify } from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET || ''

const generateToken = (id: string) => {
    const jwt = sign({id}, JWT_SECRET, {expiresIn: "2h"})
    return jwt
}

const verifyToken = (jwt: string) => {
    // console.log('verifyToken', jwt)
    const isOk  = verify(jwt, JWT_SECRET)
    // console.log('verifyOk', isOk)
    return isOk
}

export { generateToken, verifyToken } 