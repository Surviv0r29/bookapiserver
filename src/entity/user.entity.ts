import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { UserBook } from './user-book.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({ default: 0 })
  balance: number;

  @OneToMany(() => UserBook, userBook => userBook.user)
  userBooks: UserBook[];
}