import { Router, Request, Response } from "express";
import { readdirSync } from "fs"

const PATH_ROUTER = `${__dirname}`
const router = Router()

const cleanFileName = (filename: string) => {
    const file = filename.split('.').shift()
    return file
}

readdirSync(PATH_ROUTER).filter((filename) => {
    const cleanIdx = cleanFileName(filename)
    if (cleanIdx !== 'index') {
        import(`./${cleanIdx}`).then((moduleRouter) => {
                router.use(`/${cleanIdx}`,moduleRouter.router)
        }) 
        console.log(cleanIdx)
    } 
})

export {router}