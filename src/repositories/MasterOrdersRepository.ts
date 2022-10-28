import { AppDataSource } from "../data-source";
import { MasterOrdersEntity } from "../entity/MasterOrdersEntity";

export const masterOrdersRepository = AppDataSource.getRepository(MasterOrdersEntity).extend({
    findByToday() {
        return this.createQueryBuilder()
            .select('*')
            .where("Day(update_at)=Day(now())")
            .getRawMany()
    },
    findByMagicNumberSymbol(magicNumber: string, symbol: string) {
        return this.createQueryBuilder()
            .select('*')
            .where("magicNumber=:magicNumber", { magicNumber })
            .andWhere("symbol=:symbol", { symbol })
            .andWhere("Day(update_at)=Day(now())")
            .getRawMany()
    }
})