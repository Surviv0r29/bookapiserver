import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { Book } from '../entity/book.entity';
import { User } from '../entity/user.entity';
import { UserBook } from '../entity/user-book.entity';
import { UserBookRepository } from 'src/repository/user-book.repository';
import { UserRepository } from 'src/repository/user.repository';
import { BookRepository } from 'src/repository/book.repository';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(BookRepository)
    private readonly bookRepository: BookRepository,
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
    @InjectRepository(UserBookRepository)
    private readonly userBookRepository: UserBookRepository,
  ) {}

  async findById(id: number): Promise<Book> {
    return this.bookRepository.findOne({ where: { id: id } });
  }

  async buyBook(userId: number, bookId: number): Promise<boolean> {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    const book = await this.bookRepository.findOne({ where: { id: bookId } });


    if (!user || !book || user.balance < book.price) {
      return false;
    }

    const userBook = new UserBook();
    userBook.userId = user.id;
    userBook.bookId = book.id;

    const newBalance = user.balance - book.price;

    await this.userRepository.manager.transaction(async transactionalEntityManager => {
      await transactionalEntityManager.save(User, { ...user, balance: newBalance });
      await transactionalEntityManager.save(UserBook, userBook);
    });

    return true;
  }
}
