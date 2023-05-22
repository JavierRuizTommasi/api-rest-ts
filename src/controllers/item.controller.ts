import { Request, Response } from "express"
import { handleHTTP } from "../utils/error.handle"
import { insertCar, getCars, getCar, updateCar, deleteCar } from "../services/item.service"

const getItem = async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        const car = await getCar(id)
        const data = car ? car : 'Not Found'
        res.send(data)
    } catch (e) {
        handleHTTP(res, 'ERROR_GET_ITEM')
    }
}

const getItems = async (req: Request, res: Response) => {
    try {
        const cars = await getCars()
        res.send(cars)
        
    } catch (e) {
        handleHTTP(res, 'ERROR_GET_ITEMS')
    }
}

const addItem = async (req: Request, res: Response ) => {
    try {
        const responseItem = await insertCar(req.body)
        res.send(responseItem)
    } catch (e) {
        handleHTTP(res, 'ERROR_ADD_ITEM', e)
    }
}

const deleteItem = async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        const car = await deleteCar(id)
        res.send(car)
    } catch (e) {
        handleHTTP(res, 'ERROR_DELETE_ITEM')
    }
}

const updateItem = async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        const responseItem = await updateCar(id, req.body)
        res.send(responseItem)
    } catch (e) {
        handleHTTP(res, 'ERROR_UPDATE_ITEM')
    }
}

export {getItem, getItems, addItem, deleteItem, updateItem}