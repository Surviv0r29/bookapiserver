import { EntityRepository, Repository } from 'typeorm';
import { UserBook } from '../entity/user-book.entity'; // Make sure this import is correct

@EntityRepository(UserBook)
export class UserBookRepository extends Repository<UserBook> {}
