import { Request, Response } from "express";
import { masterOrdersRepository } from "../repositories/MasterOrdersRepository";

export class MasterOrdersController {
    async createOrUpdate(req: Request, res: Response) {
        const { magicNumber, symbol, quantity } = req.body

        const orders = await masterOrdersRepository.findByMagicNumberSymbol(magicNumber, symbol)

        if (orders[0] == undefined) {
            const newOrders = masterOrdersRepository.create({
                magicNumber,
                symbol,
                quantity
            })

            await masterOrdersRepository.save(newOrders)
            return res.send()
        }

        await masterOrdersRepository.update(orders[0].id, {
            quantity
        })
        return res.send()

    }
}