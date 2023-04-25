import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FilesLocationService } from './files-location.service';
import { CreateFileLocationDto } from './dto/create-file-location.dto';
import { UpdateFileLocationDto } from './dto/update-file-location.dto';
import { arrangeData } from '../../common/utils/array.utils';
import { ApiTags } from '@nestjs/swagger';
import { DEFAULT_ROUTE_TAGS } from '../../common/defaults/tags.default';
import { IsNull } from 'typeorm';
import { omit } from '../../common/utils/caster.utils';
import { BookService } from '../book/book.service';

@ApiTags(DEFAULT_ROUTE_TAGS.FILE_LOCATION)
@Controller('file-location')
export class FilesLocationController {
  constructor(
    private readonly fileLocationService: FilesLocationService,
    private readonly bookService: BookService,
  ) {}

  @Post()
  create(@Body() createFileDto: CreateFileLocationDto) {
    return this.fileLocationService.create(createFileDto);
  }

  @Get()
  async findAll() {
    const filters = {
      parent: { id: IsNull() },
    };
    const locations = await this.fileLocationService.findAll(filters);
    const books = await this.bookService.findAll({
      file_location: { id: IsNull() },
    });

    const data = [
      ...locations.map((file) => ({ ...file, type: 'location' })),
      ...books.map((file) => ({ ...file, type: 'book' })),
    ];

    return data;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const fileLocation = await this.fileLocationService.find({ id });
    const recursiveDetails = await this.fileLocationService.findCascadeRoot(id);
    const childFileLocation = await this.fileLocationService.findAll({
      parent: { id },
    });
    const breadCrumbs = arrangeData(recursiveDetails);
    const { books } = fileLocation;

    const collections = [
      ...childFileLocation.map((file) => ({ ...file, type: 'location' })),
      ...books.map((book) => ({ ...book, type: 'book' })),
    ];
    return {
      ...omit(fileLocation, [books]),
      collections,
      breadCrumbs,
    };
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFileDto: UpdateFileLocationDto,
  ) {
    return this.fileLocationService.update(id, updateFileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fileLocationService.delete(id);
  }
}
