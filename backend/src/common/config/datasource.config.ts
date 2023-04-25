import * as dotenv from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';
import { FileLocation } from '../../module/files-location/entities/file-location.entity';
import { Book } from '../../module/book/entities/book.entity';

dotenv.config();

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  migrations: ['dist/common/database/migrations/*.js'],
  ssl: process.env.NODE_ENV === 'production',
  entities: [FileLocation, Book],
  synchronize: true,
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;

// import parseBoolean from '@eturino/ts-parse-boolean';
// import { TypeOrmModuleOptions } from '@nestjs/typeorm';
// import * as dotenv from 'dotenv';
// import { join } from 'path';

// dotenv.config();

// export = [
//   {
//     //name: 'default',
//     type: 'mssql',
//     host: process.env.DEFAULT_DB_HOST,
//     username: process.env.DEFAULT_DB_USERNAME,
//     password: process.env.DEFAULT_DB_PASSWORD,
//     database: process.env.DEFAULT_DB_NAME,
//     options: {
//       instanceName: process.env.DEFAULT_DB_INSTANCE,
//       enableArithAbort: false,
//     },
//     logging: parseBoolean(process.env.DEFAULT_DB_LOGGING),
//     dropSchema: false,
//     synchronize: false,
//     migrationsRun: parseBoolean(process.env.DEFAULT_DB_RUN_MIGRATIONS),
//     migrations: [join(__dirname, '..', 'model/migration/*.{ts,js}')],
//     cli: {
//       migrationsDir: 'src/model/migration',
//     },
//     entities: [
//       join(__dirname, '..', 'model/entity/default/**/*.entity.{ts,js}'),
//     ],
//   } as TypeOrmModuleOptions,
//   {
//     name: 'other',
//     type: 'mssql',
//     host: process.env.OTHER_DB_HOST,
//     username: process.env.OTHER_DB_USERNAME,
//     password: process.env.OTHER_DB_PASSWORD,
//     database: process.env.OTHER_DB_NAME,
//     options: {
//       instanceName: process.env.OTHER_DB_INSTANCE,
//       enableArithAbort: false,
//     },
//     logging: parseBoolean(process.env.OTHER_DB_LOGGING),
//     dropSchema: false,
//     synchronize: false,
//     migrationsRun: false,
//     entities: [],
//   } as TypeOrmModuleOptions,
// ];
