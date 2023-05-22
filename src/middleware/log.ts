import { NextFunction, Request, Response } from "express"

const logMiddleware = function(req: Request, res: Response, next: NextFunction) {
    console.log('Soy el middleware')
    next()
}

export { logMiddleware}