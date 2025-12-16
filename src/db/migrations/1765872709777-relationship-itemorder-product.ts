import { MigrationInterface, QueryRunner } from "typeorm";

export class RelationshipItemorderProduct1765872709777 implements MigrationInterface {
    name = 'RelationshipItemorderProduct1765872709777'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item_order" ADD "productId" uuid`);
        await queryRunner.query(`ALTER TABLE "item_order" ADD CONSTRAINT "FK_8e31b32ef38617943f199fc22b2" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item_order" DROP CONSTRAINT "FK_8e31b32ef38617943f199fc22b2"`);
        await queryRunner.query(`ALTER TABLE "item_order" DROP COLUMN "productId"`);
    }

}
