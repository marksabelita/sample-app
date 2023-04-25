import { MigrationInterface, QueryRunner } from 'typeorm';

export class BookTable1682061243414 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE book (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255),
      file_location_id INTEGER REFERENCES file_location(id)
    );`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE book;`);
  }
}
