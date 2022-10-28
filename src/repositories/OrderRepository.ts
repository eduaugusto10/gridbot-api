import { AppDataSource } from "../data-source";
import { OrderEntity } from "../entity/OrderEntity";

export const orderRepository = AppDataSource.getRepository(OrderEntity).extend({
    findLastMinutes() {
        return this.createQueryBuilder()
            .select('*')
            .where("create_at > (now() - INTERVAL 1 minute)")
            .getRawMany()
    }
})