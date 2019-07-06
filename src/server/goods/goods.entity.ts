import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';

@Entity()
export class Goods {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('int')
  typeid: number;

  @Column('int')
  status: number;
}
