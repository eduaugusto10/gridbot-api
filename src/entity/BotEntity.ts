import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('tbmagicNumbers')
export class BotEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'integer', unique: true, nullable: true })
    magicNumber: number

    @Column({ type: 'varchar' })
    description: string

    @CreateDateColumn()
    create_at: Date

    @UpdateDateColumn()
    update_at: Date
}