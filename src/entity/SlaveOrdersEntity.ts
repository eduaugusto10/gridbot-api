import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserEntity } from "./UserEntity";

@Entity('tbslaveorders')
export class SlaveOrdersEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'integer' })
    magicNumber: number

    @Column('varchar', { length: '20' })
    symbol: string

    @Column({type:'integer'})
    quantity: number

    @Column({type:'integer'})
    slaveOrders: number
        
    @CreateDateColumn()
    create_at: Date

    @UpdateDateColumn()
    update_at: Date
}