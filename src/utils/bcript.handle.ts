import {hash, compare} from "bcryptjs"

const encript = async (pass: string) => {
    const passwordHash = await hash(pass, 8)
    return passwordHash
}

const verify = async (pass: string, passHash: string) => {
    const passOk = await compare(pass, passHash)
    return passOk
}

export { encript, verify }