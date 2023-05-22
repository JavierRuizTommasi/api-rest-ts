import { Schema, Types, model, Model} from "mongoose"
import { Order } from "../interfaces/order.interface"

const OrderSchema = new Schema<Order>(
    {
        number: {
            type: Number,
            require: true
        },
        name: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const OrderModel = model('orders', OrderSchema)
export default OrderModel