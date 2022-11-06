import { Request, Response } from "express";
import { BadRequestError } from "../helpers/api-errors";
import { masterOrdersRepository } from "../repositories/MasterOrdersRepository";
import { slaveOrdersRepository } from "../repositories/SlaveOrdersRepository";
import { userRepository } from "../repositories/UserRepository";


export class SlaveOrdersController {
    async createOrUpdate(req: Request, res: Response) {
        const { magicNumber, symbol, quantity, slaveOrders } = req.body

        const orders = await slaveOrdersRepository.findbyMagicNumberSymbol(magicNumber, symbol)
        const user = await userRepository.findOneBy({ id: Number(slaveOrders) })
        if (!user) {
            throw new BadRequestError("Usuário não encontrado")
        }

        if (orders[0] == undefined) {
            const newOrders = slaveOrdersRepository.create({
                magicNumber,
                symbol,
                quantity,
                slaveOrders
            })

            await slaveOrdersRepository.save(newOrders)
            return res.send()
        }

        await slaveOrdersRepository.update(orders[0].id, {
            quantity
        })
        return res.send()

    }

    async getQtyOrders(req: Request, res: Response) {

        const ordersMaster = await masterOrdersRepository.findByToday()
        const ordersSlave = await slaveOrdersRepository.findByToday()

        for (let i = 0; i < ordersMaster.length; i++) {
            for (let j = 0; j < ordersSlave.length; j++) {
                if (ordersMaster[i].magicNumber === ordersSlave[j].magicNumber && ordersMaster[i].symbol == ordersSlave[j].symbol) {
                    if (ordersMaster[i].quantity == ordersSlave[j].quantity) ordersSlave[j]["status"] = "OK"
                    if (ordersMaster[i].quantity < ordersSlave[j].quantity) ordersSlave[j]["status"] = "NOK"
                }
            }
        }

        return res.json(ordersSlave)
    }
}