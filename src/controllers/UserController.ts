import { Request, Response } from "express";
import { BadRequestError } from "../helpers/api-errors";
import { userRepository } from "../repositories/UserRepository";
import bcrypt from 'bcrypt'


export class UserController {
    async store(req: Request, res: Response) {
        const {
            name,
            email,
            password,
            account,
            phone,
            multiplier,
            administrator,
            validate
        } = req.body

        const userExists = await userRepository.findOneBy({ email })

        if (userExists) {
            throw new BadRequestError("E-mail já cadastrado")
        }

        const hashPass = await bcrypt.hash(password, 10)

        const newUser = userRepository.create({
            name,
            email,
            account,
            phone,
            password: hashPass,
            administrator,
            multiplier,
            validate
        })

        await userRepository.save(newUser)
        const { password: _, ...customer } = newUser
        return res.status(201).json(customer)

    }

    async getById(req: Request, res: Response) {
        const { id } = req.params
        const user = await userRepository.findOneBy({ id: Number(id) })

        if (!user) {
            throw new BadRequestError("Usuário não encontrado.")
        }

        const { password: _, ...customer } = user
        return res.json(customer)

    }
    async getByAccount(req: Request, res: Response) {
        const today = new Date()
        const { account } = req.params
        const user = await userRepository.findOneBy({ account: Number(account) })

        if (!user) {
            throw new BadRequestError("Usuário não encontrado.")
        }
        const validateStatus = today < user.validate ? true : false
        const configuration = {
            multiplier: user.multiplier,
            validateStatus,
        }
        return res.json(configuration)
    }

    async getAll(req: Request, res: Response) {
        const users = await userRepository.find()
        if (!users) {
            throw new BadRequestError("Nenhum usuário encontrado")
        }

        return res.json(users)
    }

    async update(req: Request, res: Response) {
        const { id } = req.params

        const {
            name,
            email,
            account,
            phone,
            administrator,
            multiplier,
            validate
        } = req.body

        const user = await userRepository.findOneBy({ id: Number(id) })
        if (!user) {
            throw new BadRequestError("Nenhum usuário encontrado")
        }
        
        await userRepository.update(parseInt(id), {
            name,
            email,
            account,
            phone,
            administrator,
            multiplier,
            validate
        })

        return res.send()
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params
        const user = await userRepository.findOneBy({ id: Number(id) })

        if (!user) {
            throw new BadRequestError("Usuário não encontrado")
        }
        await userRepository.remove(user)

        return res.send()
    }
}