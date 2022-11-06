import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn } from "typeorm"
import { BotCustomerEntity } from "./BotCustomerEntity"
import { BotEntity } from "./BotEntity"
import { SlaveOrdersEntity } from "./SlaveOrdersEntity"

@Entity('tbuser')
export class UserEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column("varchar", { length: '100' })
    name: string

    @Column("varchar", { length: '100' })
    email: string

    @Column("varchar", { length: '20' })
    phone: string

    @Column({ type: 'varchar' })
    password: string

    @Column("varchar", { length: '100' })
    account: number

    @Column("varchar", { length: '20' })
    administrator: string

    @Column({ type: 'float' })
    multiplier: number

    @Column({ type: 'date' })
    validate: Date

    @CreateDateColumn()
    create_at: Date

    @UpdateDateColumn()
    update_at: Date

}
