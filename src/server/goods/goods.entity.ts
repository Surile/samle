import {
  PrimaryGeneratedColumn,
  Entity,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Type } from '../type/type.entity';
@Entity()
export class Goods {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @OneToOne(type => Type)
  @JoinColumn()
  type: Type;

  @Column('int')
  status: number;
}
