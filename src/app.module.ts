import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookModule } from './module/book.module';
import { UserModule } from './module/user.module';
import { User } from './entity/user.entity';
import { Book } from './entity/book.entity';
import { UserBook } from './entity/user-book.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: "root",
      password: "",
      database: "books_api",
      entities: [User, Book, UserBook],
      synchronize: true,
    }),
    UserModule,
    BookModule,
  ],
})
export class AppModule {}
