import { Entity, Column, PrimaryGeneratedColumn,ManyToMany,JoinTable } from 'typeorm';
import { UserBook } from './user-book.entity';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ type: 'int', nullable: true })
  discountRate: number;

  @Column()
  coverImage: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;
  @ManyToMany(() => UserBook)
  @JoinTable()
  userBooks: UserBook[];
}
