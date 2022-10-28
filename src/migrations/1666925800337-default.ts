import { MigrationInterface, QueryRunner } from "typeorm";

export class default1666925800337 implements MigrationInterface {
    name = 'default1666925800337'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tbuser\` ADD \`validate\` date NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tbuser\` DROP COLUMN \`validate\``);
    }

}
