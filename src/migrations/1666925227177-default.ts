import { MigrationInterface, QueryRunner } from "typeorm";

export class default1666925227177 implements MigrationInterface {
    name = 'default1666925227177'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tbuser\` DROP COLUMN \`ativated\``);
        await queryRunner.query(`ALTER TABLE \`tbuser\` DROP COLUMN \`broker\``);
        await queryRunner.query(`ALTER TABLE \`tbuser\` DROP COLUMN \`description\``);
        await queryRunner.query(`ALTER TABLE \`tbuser\` DROP COLUMN \`passBroker\``);
        await queryRunner.query(`ALTER TABLE \`tbuser\` ADD \`multiplier\` float NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tbuser\` DROP COLUMN \`multiplier\``);
        await queryRunner.query(`ALTER TABLE \`tbuser\` ADD \`passBroker\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tbuser\` ADD \`description\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tbuser\` ADD \`broker\` varchar(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tbuser\` ADD \`ativated\` varchar(20) NOT NULL`);
    }

}
