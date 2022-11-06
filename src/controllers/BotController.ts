import { Request, Response } from "express";
import { BadRequestError } from "../helpers/api-errors";
import { botRespository } from "../repositories/BotRepository";


export class BotController {
    async store(req: Request, res: Response) {
        const { magicNumber, description } = req.body

        const botExists = await botRespository.findOneBy({ magicNumber })

        if (botExists) {
            throw new BadRequestError('Magic number já cadastrado')
        }

        const bot = botRespository.create({
            magicNumber, description
        })

        await botRespository.save(bot)
        return res.status(201).json(bot)
    }
    async getById(req: Request, res: Response) {
        const { id } = req.params

        const bot = await botRespository.findOneBy({ id: Number(id) })

        if (!bot) {
            throw new BadRequestError("Bot não encontrado")
        }

        return res.json(bot)

    }
    async getAll(req: Request, res: Response) {
        const bots = await botRespository.find()

        if (!bots) {
            throw new BadRequestError("Nenhum bot cadastrado")
        }

        return res.json(bots)
    }

    async update(req: Request, res: Response) {
        const { id } = req.params
        const { description } = req.body

        const bot = await botRespository.findOneBy({ id: Number(id) })
        if (!bot) {
            throw new BadRequestError("Bot não encontrado")
        }

        await botRespository.update(parseInt(id), {

            description
        })

        return res.send()
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params

        const bot = await botRespository.findOneBy({ id: Number(id) })
        if (!bot) {
            throw new BadRequestError("Bot não encontrado")
        }

        await botRespository.remove(bot)
        return res.send()
    }
}