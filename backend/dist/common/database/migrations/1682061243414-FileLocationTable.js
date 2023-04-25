"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileLocationTable1682061243414 = void 0;
class FileLocationTable1682061243414 {
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE file_location (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255),
      parent_id INTEGER REFERENCES file_location(id)
    );`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE file_location;`);
    }
}
exports.FileLocationTable1682061243414 = FileLocationTable1682061243414;
//# sourceMappingURL=1682061243414-FileLocationTable.js.map