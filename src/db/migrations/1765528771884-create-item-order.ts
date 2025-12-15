import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateItemOrder1765528771884 implements MigrationInterface {
    name = 'CreateItemOrder1765528771884'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "item_order" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "quantity" integer NOT NULL, "price" integer NOT NULL, "orderId" uuid, CONSTRAINT "PK_30515b56911c5e27392a0c82f2e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "item_order" ADD CONSTRAINT "FK_48e9cb6c02f6c4b370f650ec039" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item_order" DROP CONSTRAINT "FK_48e9cb6c02f6c4b370f650ec039"`);
        await queryRunner.query(`DROP TABLE "item_order"`);
    }

}
