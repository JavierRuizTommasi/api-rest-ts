import { Order } from "../interfaces/order.interface";
import OrderModel from "../models/order.model";

const getOrders = async () => {
    const responseOrders = await OrderModel.find({})
    return responseOrders
} 

export { getOrders }