import { Router } from "express"
import { registerCtrl, loginCtrl } from "../controllers/auth.controller"
import { logMiddleware } from "../middleware/log"

const router = Router()

router.post("/register", registerCtrl)
router.post("/login", loginCtrl)

export { router }