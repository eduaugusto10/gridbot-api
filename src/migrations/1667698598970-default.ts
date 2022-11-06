import { MigrationInterface, QueryRunner } from "typeorm";

export class default1667698598970 implements MigrationInterface {
    name = 'default1667698598970'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tbbotcustomer\` DROP FOREIGN KEY \`FK_4308b89b2ff44580dee79469635\``);
        await queryRunner.query(`ALTER TABLE \`tbbotcustomer\` CHANGE \`magicNumberId\` \`magicNumber\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`tbbotcustomer\` CHANGE \`magicNumber\` \`magicNumber\` int NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tbbotcustomer\` CHANGE \`magicNumber\` \`magicNumber\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`tbbotcustomer\` CHANGE \`magicNumber\` \`magicNumberId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`tbbotcustomer\` ADD CONSTRAINT \`FK_4308b89b2ff44580dee79469635\` FOREIGN KEY (\`magicNumberId\`) REFERENCES \`tbmagicNumbers\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
