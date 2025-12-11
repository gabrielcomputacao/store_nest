import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1765444396022 implements MigrationInterface {
    name = 'Migrations1765444396022'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_features" ADD "weight" integer`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_features" DROP COLUMN "weight"`);
    }

}
