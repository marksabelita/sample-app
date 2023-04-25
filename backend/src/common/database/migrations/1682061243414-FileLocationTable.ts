import { MigrationInterface, QueryRunner } from 'typeorm';

export class FileLocationTable1682061243414 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE file_location (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255),
      parent_id INTEGER REFERENCES file_location(id)
    );`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE file_location;`);
  }
}
