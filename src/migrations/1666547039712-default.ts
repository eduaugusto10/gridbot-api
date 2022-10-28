import { MigrationInterface, QueryRunner } from "typeorm";

export class default1666547039712 implements MigrationInterface {
    name = 'default1666547039712'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`tbmasterorders\` (\`id\` int NOT NULL AUTO_INCREMENT, \`magicNumber\` int NOT NULL, \`symbol\` varchar(20) NOT NULL, \`quantity\` int NOT NULL, \`create_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`update_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tborders\` (\`id\` int NOT NULL AUTO_INCREMENT, \`symbol\` varchar(20) NOT NULL, \`ticket\` varchar(20) NOT NULL, \`entry\` float NOT NULL, \`takeProfit\` float NOT NULL, \`stopLoss\` float NOT NULL, \`typeOrder\` int NOT NULL, \`operationType\` int NOT NULL, \`lote\` float NOT NULL, \`status\` varchar(20) NOT NULL, \`magicNumber\` int NOT NULL, \`create_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`update_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tbslaveorders\` (\`id\` int NOT NULL AUTO_INCREMENT, \`magicNumber\` int NOT NULL, \`symbol\` varchar(20) NOT NULL, \`quantity\` int NOT NULL, \`create_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`update_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tbcustomermanager\` (\`id\` int NOT NULL AUTO_INCREMENT, \`balance\` float NOT NULL, \`balanceToday\` float NOT NULL, \`closedOrdersInsider\` float NOT NULL, \`closedOrdersExplicitus\` float NOT NULL, \`closedOrdersPoupDobrada\` float NOT NULL, \`openOrdersInsider\` float NOT NULL, \`openOrdersExplicitus\` float NOT NULL, \`openOrdersPoupDobrada\` float NOT NULL, \`accountBalance\` float NOT NULL, \`percClosedOrders\` float NOT NULL, \`percOpenOrders\` float NOT NULL, \`date\` datetime NOT NULL, \`create_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`update_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`customerId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tbuser\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(100) NOT NULL, \`email\` varchar(100) NOT NULL, \`phone\` varchar(20) NOT NULL, \`password\` varchar(255) NOT NULL, \`broker\` varchar(50) NOT NULL, \`account\` varchar(100) NOT NULL, \`administrator\` varchar(20) NOT NULL, \`ativated\` varchar(20) NOT NULL, \`multpInsider\` int NOT NULL, \`validateInsider\` datetime NOT NULL, \`multpExplicitus\` int NOT NULL, \`passBroker\` varchar(255) NOT NULL, \`validateExplicitus\` datetime NOT NULL, \`multpPoupDobrada\` int NOT NULL, \`validatePoupDobrada\` datetime NOT NULL, \`description\` varchar(255) NOT NULL, \`create_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`update_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tbcustomerorders\` (\`id\` int NOT NULL AUTO_INCREMENT, \`symbol\` varchar(20) NOT NULL, \`ticket\` varchar(40) NOT NULL, \`entry\` float NOT NULL, \`takeProfit\` float NOT NULL, \`stopLoss\` float NOT NULL, \`typeOrder\` int NOT NULL, \`operationType\` int NOT NULL, \`lote\` float NOT NULL, \`status\` varchar(40) NOT NULL, \`magicNumber\` int NOT NULL, \`create_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`update_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`customerOrderId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`tbcustomermanager\` ADD CONSTRAINT \`FK_566f85ed132d9ad6bf62d592325\` FOREIGN KEY (\`customerId\`) REFERENCES \`tbuser\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tbcustomerorders\` ADD CONSTRAINT \`FK_756e09f144f920a71b38f9c272e\` FOREIGN KEY (\`customerOrderId\`) REFERENCES \`tbuser\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tbcustomerorders\` DROP FOREIGN KEY \`FK_756e09f144f920a71b38f9c272e\``);
        await queryRunner.query(`ALTER TABLE \`tbcustomermanager\` DROP FOREIGN KEY \`FK_566f85ed132d9ad6bf62d592325\``);
        await queryRunner.query(`DROP TABLE \`tbcustomerorders\``);
        await queryRunner.query(`DROP TABLE \`tbuser\``);
        await queryRunner.query(`DROP TABLE \`tbcustomermanager\``);
        await queryRunner.query(`DROP TABLE \`tbslaveorders\``);
        await queryRunner.query(`DROP TABLE \`tborders\``);
        await queryRunner.query(`DROP TABLE \`tbmasterorders\``);
    }

}
