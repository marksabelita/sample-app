import { PartialType } from '@nestjs/mapped-types';
import { CreateFileLocationDto } from './create-file-location.dto';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { FileLocation } from '../entities/file-location.entity';
import { DeepPartial } from 'typeorm';

export class UpdateFileLocationDto extends PartialType(CreateFileLocationDto) {
  @ApiProperty()
  @IsString()
  @IsOptional()
  name: string;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  parent_id: DeepPartial<FileLocation>;
}
