import { Module } from '@nestjs/common';
import { FilesLocationService } from './files-location.service';
import { FilesLocationController } from './files-location.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileLocation } from './entities/file-location.entity';
import { BookService } from '../book/book.service';
import { Book } from '../book/entities/book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FileLocation, Book])],
  controllers: [FilesLocationController],
  providers: [FilesLocationService, BookService],
})
export class FilesLocationModule {}
