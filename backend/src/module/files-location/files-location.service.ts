import { Injectable } from '@nestjs/common';
import { CreateFileLocationDto } from './dto/create-file-location.dto';
import { UpdateFileLocationDto } from './dto/update-file-location.dto';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { FileLocation } from './entities/file-location.entity';

@Injectable()
export class FilesLocationService {
  constructor(
    @InjectRepository(FileLocation)
    private fileLocationRepository: Repository<FileLocation>,
    @InjectDataSource() private dataSource: DataSource,
  ) {}

  public async findAll(params: Record<string, any>): Promise<FileLocation[]> {
    return await this.fileLocationRepository.find({
      where: params,
    });
  }

  public async find(params: Record<string, unknown>): Promise<FileLocation> {
    return await this.fileLocationRepository.findOne({
      relations: ['books'],
      where: params,
    });
  }

  public async findCascadeRoot(id: string): Promise<FileLocation[]> {
    return await this.dataSource.query(
      `
      WITH RECURSIVE parent_file_location AS (
        SELECT id, name, parent_id
        FROM file_location
        WHERE id = ${id}
        UNION ALL
        SELECT t.id, t.name, t.parent_id
        FROM file_location t
        JOIN parent_file_location p ON t.id = p.parent_id
      )
      SELECT *
      FROM parent_file_location;`,
    );
    // return await this.fileLocationRepository.findOne({ where: { id } });
  }

  public async create(
    createFileLocationDto: CreateFileLocationDto,
  ): Promise<FileLocation> {
    return await this.fileLocationRepository.save(createFileLocationDto);
  }

  public async update(id, createFileLocationDto: UpdateFileLocationDto) {
    return await this.fileLocationRepository.update(
      { id },
      createFileLocationDto,
    );
  }

  public async delete(id) {
    return await this.fileLocationRepository.delete({ id });
  }
}
