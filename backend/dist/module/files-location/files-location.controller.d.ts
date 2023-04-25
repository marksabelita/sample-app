import { FilesLocationService } from './files-location.service';
import { CreateFileLocationDto } from './dto/create-file-location.dto';
import { UpdateFileLocationDto } from './dto/update-file-location.dto';
import { BookService } from '../book/book.service';
export declare class FilesLocationController {
    private readonly fileLocationService;
    private readonly bookService;
    constructor(fileLocationService: FilesLocationService, bookService: BookService);
    create(createFileDto: CreateFileLocationDto): Promise<import("./entities/file-location.entity").FileLocation>;
    findAll(): Promise<({
        type: string;
        name: string;
        parent: import("./entities/file-location.entity").FileLocation;
        books: import("../book/entities/book.entity").Book[];
        id: string;
    } | {
        type: string;
        name: string;
        file_location: import("./entities/file-location.entity").FileLocation;
        id: string;
    })[]>;
    findOne(id: string): Promise<any>;
    update(id: string, updateFileDto: UpdateFileLocationDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
