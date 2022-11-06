import { MigrationInterface, QueryRunner } from "typeorm";

export class default1667695791229 implements MigrationInterface {
    name = 'default1667695791229'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`tbbotcustomer\` (\`id\` int NOT NULL AUTO_INCREMENT, \`lote\` int NOT NULL, \`validate\` date NOT NULL, \`create_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`update_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`customerBotId\` int NULL, \`magicNumberId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`tbbotcustomer\` ADD CONSTRAINT \`FK_22c99ec0d34c5d943eb7bf024a8\` FOREIGN KEY (\`customerBotId\`) REFERENCES \`tbuser\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tbbotcustomer\` ADD CONSTRAINT \`FK_4308b89b2ff44580dee79469635\` FOREIGN KEY (\`magicNumberId\`) REFERENCES \`tbmagicNumbers\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tbbotcustomer\` DROP FOREIGN KEY \`FK_4308b89b2ff44580dee79469635\``);
        await queryRunner.query(`ALTER TABLE \`tbbotcustomer\` DROP FOREIGN KEY \`FK_22c99ec0d34c5d943eb7bf024a8\``);
        await queryRunner.query(`DROP TABLE \`tbbotcustomer\``);
    }

}
