import { AppDataSource } from "../data-source";
import { BotCustomerEntity } from "../entity/BotCustomerEntity";

export const botCustomerAssignRepository = AppDataSource.getRepository(BotCustomerEntity).extend({
    findBot(magicNumber: number, customerBot: number) {
        return this.createQueryBuilder()
            .select('lote')
            .addSelect('validate')
            .addSelect('customerBotId')
            .addSelect('magicNumber')
            .addSelect('id')
            .where("magicNumber=:magicNumber", { magicNumber })
            .andWhere("customerBotId=:customerBot", { customerBot })
            .getRawMany()
    },
    findAllByCustomer(customerBot: number) {
        return this.createQueryBuilder()
            .select('lote')
            .addSelect('validate')
            .addSelect('customerBotId')
            .addSelect('magicNumber')
            .addSelect('id')
            .where("customerBotId=:customerBot", { customerBot })
            .getRawMany()

    }
})