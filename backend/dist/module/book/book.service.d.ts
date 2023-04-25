import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';
export declare class BookService {
    private bookRepository;
    constructor(bookRepository: Repository<Book>);
    findAll(filters: any): Promise<Book[]>;
    find(id: string): Promise<Book>;
    create(createBookDto: CreateBookDto): Promise<Book>;
    update(id: any, createBookDto: UpdateBookDto): Promise<import("typeorm").UpdateResult>;
    delete(id: any): Promise<import("typeorm").DeleteResult>;
}
