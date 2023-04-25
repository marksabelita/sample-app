"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSourceOptions = void 0;
const dotenv = require("dotenv");
const typeorm_1 = require("typeorm");
const file_location_entity_1 = require("../../module/files-location/entities/file-location.entity");
const book_entity_1 = require("../../module/book/entities/book.entity");
dotenv.config();
exports.dataSourceOptions = {
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    migrations: ['dist/common/database/migrations/*.js'],
    ssl: process.env.NODE_ENV === 'production',
    entities: [file_location_entity_1.FileLocation, book_entity_1.Book],
    synchronize: true,
};
const dataSource = new typeorm_1.DataSource(exports.dataSourceOptions);
exports.default = dataSource;
//# sourceMappingURL=datasource.config.js.map