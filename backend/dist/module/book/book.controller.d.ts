import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { FindQueryDto } from './dto/query-book.dto';
export declare class BookController {
    private readonly bookService;
    constructor(bookService: BookService);
    create(createFileDto: CreateBookDto): Promise<import("./entities/book.entity").Book>;
    findAll(query: FindQueryDto): Promise<import("./entities/book.entity").Book[]>;
    findOne(id: string): Promise<import("./entities/book.entity").Book>;
    update(id: string, updateFileDto: UpdateBookDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
