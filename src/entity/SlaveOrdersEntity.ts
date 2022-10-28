import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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

    @CreateDateColumn()
    create_at: Date

    @UpdateDateColumn()
    update_at: Date
}