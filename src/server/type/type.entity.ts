import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinTable,
} from 'typeorm';
import { Detail } from './detail.entity';
@Entity()
export class Type {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  alias: string;

  @Column()
  icon: string;

  @OneToMany(type => Detail, detail => detail.text)
  detail: Detail[];

  @Column()
  description: string;

  @Column('int')
  status: number;
}
