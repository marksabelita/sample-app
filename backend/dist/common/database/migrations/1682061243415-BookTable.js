"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookTable1682061243414 = void 0;
class BookTable1682061243414 {
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE book (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255),
      file_location_id INTEGER REFERENCES file_location(id)
    );`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE book;`);
    }
}
exports.BookTable1682061243414 = BookTable1682061243414;
//# sourceMappingURL=1682061243415-BookTable.js.map