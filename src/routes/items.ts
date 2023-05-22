import { Router } from "express"
import { addItem, deleteItem, getItem, getItems, updateItem } from "../controllers/item.controller"
import { logMiddleware } from "../middleware/log"

const router = Router()

router.get("/", logMiddleware, getItems)
router.get("/:id", getItem)
router.post("/", addItem)
router.delete("/:id", deleteItem)
router.put("/:id", updateItem)

export { router }