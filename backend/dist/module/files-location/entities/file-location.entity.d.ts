import { BaseEntity } from '../../../common/database/entities/base.entity';
import { Book } from '../../book/entities/book.entity';
export declare class FileLocation extends BaseEntity {
    name: string;
    parent: FileLocation;
    books: Book[];
}
