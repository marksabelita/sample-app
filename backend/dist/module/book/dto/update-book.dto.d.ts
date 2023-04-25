import { CreateBookDto } from './create-book.dto';
import { Book } from '../entities/book.entity';
import { DeepPartial } from 'typeorm';
declare const UpdateBookDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateBookDto>>;
export declare class UpdateBookDto extends UpdateBookDto_base {
    name: string;
    file_location: DeepPartial<Book>;
}
export {};
