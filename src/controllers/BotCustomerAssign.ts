import { Request, Response } from "express";
import { BadRequestError } from "../helpers/api-errors";
import { botCustomerAssignRepository } from "../repositories/BotCustomerAssign";

export class BotCustomerAssign {
    async store(req: Request, res: Response) {
        const { magicNumber, lote, validate, customerBot } = req.body

        const botExists = await botCustomerAssignRepository.findBot(magicNumber, customerBot)
        if (botExists.length > 0) {
            throw new BadRequestError("Bot cadastrado para este usuário")
        }

        const bot = await botCustomerAssignRepository.create({
            magicNumber, lote, validate, customerBot
        })
        await botCustomerAssignRepository.save(bot)

        return res.status(201).json(bot)
    }

    async getAllByCustomer(req: Request, res: Response) {
        const { customer } = req.params
        const bots = await botCustomerAssignRepository.findAllByCustomer(Number(customer))

        if (!bots) {
            throw new BadRequestError("Nenhum bot cadastrado")
        }

        return res.json(bots)
    }

    async getById(req: Request, res: Response) { }

    async update(req: Request, res: Response) {
        const { id } = req.params
        const { magicNumber, lote, validate, customerBot } = req.body

        const bot = await botCustomerAssignRepository.findOneBy({ id: Number(id) })

        if (!bot) {
            throw new BadRequestError("Bot não encontrado")
        }

        await botCustomerAssignRepository.update(Number(id), {
            magicNumber, lote, validate, customerBot
        })

        return res.json(bot)
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params

        const bot = await botCustomerAssignRepository.findOneBy({ id: Number(id) })

        if (!bot) {
            throw new BadRequestError("Bot não encontrado")
        }

        await botCustomerAssignRepository.delete(bot)

        return res.send()
    }
}