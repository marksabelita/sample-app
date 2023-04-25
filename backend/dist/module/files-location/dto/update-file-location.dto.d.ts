import { CreateFileLocationDto } from './create-file-location.dto';
import { FileLocation } from '../entities/file-location.entity';
import { DeepPartial } from 'typeorm';
declare const UpdateFileLocationDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateFileLocationDto>>;
export declare class UpdateFileLocationDto extends UpdateFileLocationDto_base {
    name: string;
    parent_id: DeepPartial<FileLocation>;
}
export {};
