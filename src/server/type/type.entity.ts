import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Detail } from './detail.entity';
@Entity()
export class Type {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  image?: string;

  @Column()
  icon: string;

  @OneToMany(type => Detail, detail => detail.type)
  details: Detail[];

  @Column()
  english: string;

  @Column()
  description: string;

  @Column('int')
  status: number;
}
