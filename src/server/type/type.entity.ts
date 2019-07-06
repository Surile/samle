import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Type {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  describe: string;

  @Column('int')
  status: number;
}
