import { Request, Response } from "express";
import { BadRequestError } from "../helpers/api-errors";
import { orderRepository } from "../repositories/OrderRepository";

export class OrderController {
    async store(req: Request, res: Response) {
        const {
            symbol,
            ticket,
            entry,
            takeProfit,
            stopLoss,
            typeOrder,
            lote,
            status,
            magicNumber,
            operationType
        } = req.body

        const order = orderRepository.create({
            symbol,
            ticket,
            entry,
            takeProfit,
            stopLoss,
            typeOrder,
            lote,
            status,
            magicNumber,
            operationType
        })

        await orderRepository.save(order)

        res.json(order)
    }
    async getById(req: Request, res: Response) {
        const { id } = req.params
        const order = await orderRepository.findOneBy({ id: Number(id) })

        if (!order) {
            throw new BadRequestError("Ordem não encontrada")
        }

        return res.json(order)
    }

    async getAll(req: Request, res: Response) {
        const orders = await orderRepository.find()

        if (!orders) {
            throw new BadRequestError("Nenhum ordem encontrada")
        }

        return res.json(orders)
    }
    async delete(req: Request, res: Response) {
        const { id } = req.params
        const order = await orderRepository.findOneBy({ id: Number(id) })

        if (!order) {
            throw new BadRequestError("Ordem não encontrada")
        }

        await orderRepository.remove(order)

        res.send()
    }

    async getOrderToday(req: Request, res: Response) {
        const orders = await orderRepository.findLastMinutes()

        const order = { "orders": orders, "length": orders.length }
        return res.json(order)
    }

    async update(req: Request, res: Response) {
        const { id } = req.params
        const {
            symbol,
            ticket,
            entry,
            takeProfit,
            stopLoss,
            typeOrder,
            lote,
            status,
            magicNumber,
            operationType
        } = req.body

        const order = await orderRepository.findOneBy({ id: Number(id) })

        if (!order) {
            throw new BadRequestError("Ordem não encontrada")
        }

        await orderRepository.update(Number(id), {
            symbol,
            ticket,
            entry,
            takeProfit,
            stopLoss,
            typeOrder,
            lote,
            status,
            magicNumber,
            operationType
        })

        return res.send()
    }

    async closeErrorSymbol(req: Request, res: Response) {
        const { symbol, status } = req.body

        const order = orderRepository.create({
            symbol,
            ticket: "0",
            entry: 0,
            takeProfit: 0,
            stopLoss: 0,
            typeOrder: 99,
            lote: 0,
            status,
            magicNumber: 99,
            operationType: 0
        })

        await orderRepository.save(order)

        res.json(order)
    }
}
