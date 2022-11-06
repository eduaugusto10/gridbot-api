import { MigrationInterface, QueryRunner } from "typeorm";

export class default1667669628761 implements MigrationInterface {
    name = 'default1667669628761'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`tbmagicNumbers\` (\`id\` int NOT NULL AUTO_INCREMENT, \`magicNumber\` int NULL, \`description\` varchar(255) NOT NULL, \`create_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`update_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_46ee627b9d29fc443798375215\` (\`magicNumber\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_46ee627b9d29fc443798375215\` ON \`tbmagicNumbers\``);
        await queryRunner.query(`DROP TABLE \`tbmagicNumbers\``);
    }

}
