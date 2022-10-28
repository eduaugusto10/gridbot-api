import { MigrationInterface, QueryRunner } from "typeorm";

export class default1666924509803 implements MigrationInterface {
    name = 'default1666924509803'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tbuser\` DROP COLUMN \`multpExplicitus\``);
        await queryRunner.query(`ALTER TABLE \`tbuser\` DROP COLUMN \`multpInsider\``);
        await queryRunner.query(`ALTER TABLE \`tbuser\` DROP COLUMN \`multpPoupDobrada\``);
        await queryRunner.query(`ALTER TABLE \`tbuser\` DROP COLUMN \`validateExplicitus\``);
        await queryRunner.query(`ALTER TABLE \`tbuser\` DROP COLUMN \`validateInsider\``);
        await queryRunner.query(`ALTER TABLE \`tbuser\` DROP COLUMN \`validatePoupDobrada\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tbuser\` ADD \`validatePoupDobrada\` datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tbuser\` ADD \`validateInsider\` datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tbuser\` ADD \`validateExplicitus\` datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tbuser\` ADD \`multpPoupDobrada\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tbuser\` ADD \`multpInsider\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tbuser\` ADD \`multpExplicitus\` int NOT NULL`);
    }

}
