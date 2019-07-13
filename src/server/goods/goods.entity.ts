import {
  PrimaryGeneratedColumn,
  Entity,
  Column,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Type } from '../type/type.entity';
@Entity()
export class Goods {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToOne(type => Type, type => type.id)
  @JoinColumn({
    name: 'type_id',
  })
  type: Type;

  @Column()
  status: number;
}
