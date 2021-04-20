import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateEntities1618945763444 implements MigrationInterface {
  name = 'CreateEntities1618945763444';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "flight_journey" ("id" SERIAL NOT NULL, "createdAtUtc" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "isDeleted" boolean NOT NULL DEFAULT false, "modifiedAtUtc" TIMESTAMP WITH TIME ZONE DEFAULT now(), "departureTime" TIMESTAMP NOT NULL, "status" integer NOT NULL, "flightId" integer, CONSTRAINT "PK_073936c8ec74c559f7db38f3745" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "user" ("id" SERIAL NOT NULL, "createdAtUtc" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "isDeleted" boolean NOT NULL DEFAULT false, "modifiedAtUtc" TIMESTAMP WITH TIME ZONE DEFAULT now(), "username" character varying NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "role" integer NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(`ALTER TABLE "aircraft" ADD "airlineId" integer`);
    await queryRunner.query(
      `ALTER TABLE "aircraft" ADD CONSTRAINT "FK_64d4695156739364c077c953e59" FOREIGN KEY ("airlineId") REFERENCES "airline"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "flight_journey" ADD CONSTRAINT "FK_888e1efb51a9434b748347bf17e" FOREIGN KEY ("flightId") REFERENCES "airport"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "flight_journey" DROP CONSTRAINT "FK_888e1efb51a9434b748347bf17e"`,
    );
    await queryRunner.query(
      `ALTER TABLE "aircraft" DROP CONSTRAINT "FK_64d4695156739364c077c953e59"`,
    );
    await queryRunner.query(`ALTER TABLE "aircraft" DROP COLUMN "airlineId"`);
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`DROP TABLE "flight_journey"`);
  }
}
