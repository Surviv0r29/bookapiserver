import { Module } from '@nestjs/common';
import { TypeOrmModule, getDataSourceToken, getRepositoryToken } from '@nestjs/typeorm';
import { BookController } from '../controller/book.controller';
import { BookService } from '../service/book.service';
import { BookRepository, bookCustomRepository } from '../repository/book.repository';
import { UserRepository } from 'src/repository/user.repository';
import { UserBookRepository } from 'src/repository/user-book.repository';
import { Book } from 'src/entity/book.entity';
import { DataSource } from 'typeorm';
import { User } from 'src/entity/user.entity';
import { UserBook } from 'src/entity/user-book.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Book,
      User,
      UserBook,
    ]),
  ],
  controllers: [BookController],
  providers: [
    {
      provide: getRepositoryToken(Book),
      inject: [getDataSourceToken()],
      useFactory(datasource: DataSource) {
        return datasource.getRepository(Book).extend(bookCustomRepository);
      },
    },
    BookService],
})
export class BookModule {}
