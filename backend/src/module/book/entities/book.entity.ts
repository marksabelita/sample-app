import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { BaseEntity } from '../../../common/database/entities/base.entity';
import { FileLocation } from '../../files-location/entities/file-location.entity';

@Entity({ name: 'book' })
export class Book extends BaseEntity {
  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string;

  @ManyToOne(() => FileLocation, (fileLocation) => fileLocation.id, {
    cascade: true,
    eager: false,
  })
  @JoinColumn({ name: 'file_location_id' })
  file_location: FileLocation;
}
