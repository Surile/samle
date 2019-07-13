import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  OneToOne,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Type } from './type.entity';

@Entity()
export class Detail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @ManyToOne(type => Type, type => type.details)
  @JoinColumn({ name: 'type_id' })
  type: Type;
}
