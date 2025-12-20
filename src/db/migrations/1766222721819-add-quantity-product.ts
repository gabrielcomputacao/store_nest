import { MigrationInterface, QueryRunner } from "typeorm";

export class AddQuantityProduct1766222721819 implements MigrationInterface {
    name = 'AddQuantityProduct1766222721819'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ADD "quantity" integer NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "quantity"`);
    }

}
