import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { DEFAULT_ROUTE_TAGS } from '../../common/defaults/tags.default';
import { FindQueryDto } from './dto/query-book.dto';
import { omit } from '../../common/utils/caster.utils';

@ApiTags(DEFAULT_ROUTE_TAGS.BOOK)
@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  create(@Body() createFileDto: CreateBookDto) {
    return this.bookService.create(createFileDto);
  }

  @Get()
  @ApiQuery({
    name: 'file_location_id',
    type: 'number',
    required: false,
  })
  findAll(@Query() query: FindQueryDto) {
    const filters = {
      ...omit(query, ['file_location_id']),
      ...(query.file_location_id
        ? { file_location: { id: query.file_location_id } }
        : {}),
    };
    return this.bookService.findAll(filters);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.bookService.find(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFileDto: UpdateBookDto) {
    return this.bookService.update(id, updateFileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookService.delete(id);
  }
}
