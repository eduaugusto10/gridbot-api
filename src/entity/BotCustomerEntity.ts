import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserEntity } from "./UserEntity";


@Entity('tbbotcustomer')
export class BotCustomerEntity {

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => UserEntity, (user) => user.id)
    customerBot: UserEntity

    @Column({ type: 'integer' })
    magicNumber: number

    @Column({ type: 'integer' })
    lote: number

    @Column({ type: 'date' })
    validate: Date

    @CreateDateColumn()
    create_at: Date

    @UpdateDateColumn()
    update_at: Date
}