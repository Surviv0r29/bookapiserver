import { Entity, Column, PrimaryGeneratedColumn,ManyToMany,JoinTable } from 'typeorm';
import { UserBook } from './user-book.entity';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  price: number;
  @ManyToMany(() => UserBook)
  @JoinTable()
  userBooks: UserBook[];
}
