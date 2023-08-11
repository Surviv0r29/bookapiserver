import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookController } from '../controller/book.controller';
import { BookService } from '../service/book.service';
import { BookRepository } from '../repository/book.repository';
import { UserRepository } from 'src/repository/user.repository';
import { UserBookRepository } from 'src/repository/user-book.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      BookRepository,
      UserRepository,
      UserBookRepository,
    ]),
  ],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
