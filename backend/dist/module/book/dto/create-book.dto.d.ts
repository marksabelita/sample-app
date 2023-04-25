import { DeepPartial } from 'typeorm';
import { Book } from '../entities/book.entity';
export declare class CreateBookDto {
    name: string;
    file_location: DeepPartial<Book>;
}
