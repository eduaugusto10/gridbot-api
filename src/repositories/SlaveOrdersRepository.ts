import { AppDataSource } from "../data-source";
import { SlaveOrdersEntity } from "../entity/SlaveOrdersEntity";

export const slaveOrdersRepository = AppDataSource.getRepository(SlaveOrdersEntity).extend({
    findbyMagicNumberSymbol(magicNumber: string, symbol: string) {
        return this.createQueryBuilder()
            .select('*')
            .where("magicNumber=:magicNumber", { magicNumber })
            .andWhere("symbol=:symbol", { symbol })
            .andWhere("Day(update_at)=Day(now())")
            .getRawMany()
    },
    findByToday() {
        return this.createQueryBuilder()
            .select('*')
            .where("Day(update_at)=Day(now())")
            .getRawMany()
    }
})