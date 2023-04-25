import { CreateFileLocationDto } from './dto/create-file-location.dto';
import { UpdateFileLocationDto } from './dto/update-file-location.dto';
import { DataSource, Repository } from 'typeorm';
import { FileLocation } from './entities/file-location.entity';
export declare class FilesLocationService {
    private fileLocationRepository;
    private dataSource;
    constructor(fileLocationRepository: Repository<FileLocation>, dataSource: DataSource);
    findAll(params: Record<string, any>): Promise<FileLocation[]>;
    find(params: Record<string, unknown>): Promise<FileLocation>;
    findCascadeRoot(id: string): Promise<FileLocation[]>;
    create(createFileLocationDto: CreateFileLocationDto): Promise<FileLocation>;
    update(id: any, createFileLocationDto: UpdateFileLocationDto): Promise<import("typeorm").UpdateResult>;
    delete(id: any): Promise<import("typeorm").DeleteResult>;
}
