import { AppDataSource } from "../data-source";
import { BotEntity } from "../entity/BotEntity";

export const botRespository = AppDataSource.getRepository(BotEntity)