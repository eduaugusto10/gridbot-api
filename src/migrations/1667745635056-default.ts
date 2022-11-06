import { MigrationInterface, QueryRunner } from "typeorm";

export class default1667745635056 implements MigrationInterface {
    name = 'default1667745635056'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tbuser\` DROP COLUMN \`multiplier\``);
        await queryRunner.query(`ALTER TABLE \`tbuser\` DROP COLUMN \`validate\``);
        await queryRunner.query(`ALTER TABLE \`tbuser\` ADD \`broker\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tbuser\` DROP COLUMN \`broker\``);
        await queryRunner.query(`ALTER TABLE \`tbuser\` ADD \`validate\` date NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tbuser\` ADD \`multiplier\` float NOT NULL`);
    }

}
