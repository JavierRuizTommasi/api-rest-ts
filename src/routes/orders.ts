import { Router } from "express"
import { getOrderList } from "../controllers/order.controller"
import { checkJWT } from "../middleware/session"

const router = Router()

router.get("/", checkJWT, getOrderList)

export { router }