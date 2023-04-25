import { DeepPartial } from 'typeorm';
import { FileLocation } from '../entities/file-location.entity';
export declare class CreateFileLocationDto {
    name: string;
    parent_id: DeepPartial<FileLocation>;
}
