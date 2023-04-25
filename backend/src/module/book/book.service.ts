import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
  ) {}

  public async findAll(filters): Promise<Book[]> {
    return await this.bookRepository.find({
      where: filters,
    });
  }

  public find(id: string): Promise<Book> {
    return this.bookRepository.findOne({
      where: { id },
    });
  }

  public async create(createBookDto: CreateBookDto): Promise<Book> {
    return await this.bookRepository.save(createBookDto);
  }

  public async update(id, createBookDto: UpdateBookDto) {
    return await this.bookRepository.update({ id }, createBookDto);
  }

  public async delete(id) {
    return await this.bookRepository.delete({ id });
  }
}
