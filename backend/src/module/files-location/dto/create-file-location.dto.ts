import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { DeepPartial } from 'typeorm';
import { FileLocation } from '../entities/file-location.entity';

export class CreateFileLocationDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  parent_id: DeepPartial<FileLocation>;
}
