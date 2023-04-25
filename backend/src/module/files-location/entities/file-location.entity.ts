import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { BaseEntity } from '../../../common/database/entities/base.entity';
import { Book } from '../../book/entities/book.entity';

@Entity({ name: 'file_location' })
export class FileLocation extends BaseEntity {
  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string;

  @ManyToOne(() => FileLocation, (fileLocation) => fileLocation.id, {
    cascade: true,
    eager: false,
  })
  @JoinColumn({ name: 'parent_id' })
  parent: FileLocation;

  @OneToMany(() => Book, (book) => book.file_location)
  @JoinColumn()
  books: Book[];
}
