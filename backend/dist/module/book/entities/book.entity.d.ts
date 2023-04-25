import { BaseEntity } from '../../../common/database/entities/base.entity';
import { FileLocation } from '../../files-location/entities/file-location.entity';
export declare class Book extends BaseEntity {
    name: string;
    file_location: FileLocation;
}
