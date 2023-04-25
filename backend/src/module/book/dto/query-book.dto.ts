import { IsNumber, IsOptional } from 'class-validator';
import { trim } from '../../../common/utils/caster.utils';
import { Transform } from 'class-transformer';

export class FindQueryDto {
  @Transform(({ value }) => trim(value))
  @IsNumber()
  @IsOptional()
  public file_location_id: number;
}
