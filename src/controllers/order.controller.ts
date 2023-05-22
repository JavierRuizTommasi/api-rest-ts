import { Request, Response } from "express"
import { handleHTTP } from "../utils/error.handle"
import { getOrders } from "../services/order.service"
import { RequestExt } from "../interfaces/req-ext.interface"

const getOrderList = async (req: RequestExt, res: Response) => {
    try {
        const orders = await getOrders()
        res.send({orders, user: req.user})
        
    } catch (e) {
        handleHTTP(res, 'ERROR_GET_ITEMS')
    }
}


export { getOrderList }