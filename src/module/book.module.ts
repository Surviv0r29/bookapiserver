import { Module } from '@nestjs/common';
import { TypeOrmModule, getDataSourceToken, getRepositoryToken } from '@nestjs/typeorm';
import { BookController } from '../controller/book.controller';
import { BookService } from '../service/book.service';
import { BookRepository, bookCustomRepository } from '../repository/book.repository';
import { UserRepository } from 'src/repository/user.repository';
import { UserBookRepository } from 'src/repository/user-book.repository';
import { Book } from 'src/entity/book.entity';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Book,
      UserRepository,
      UserBookRepository,
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
