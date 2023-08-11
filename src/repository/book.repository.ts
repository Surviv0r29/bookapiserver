import { EntityRepository, Repository } from 'typeorm';
import { Book } from '../entity/book.entity';
import { CreateBookDto } from 'src/dto/create-book.dto';

// @EntityRepository(Book)
export interface BookRepository extends Repository<Book> {
    this: Repository<Book>;
    getAllBooks(): Promise<Book[]>;
    getBookbyId():Promise<Book>;
    createBook(book:Book):Book;
    createInstanceBook(createBookDto: CreateBookDto):Book;    
  }
export const bookCustomRepository : Pick<BookRepository,any> ={
    async getBookbyId(this: Repository<Book>,id: number) {
        return await this.findOne({ where: { id } });
      },
    
    async getAllBooks(this: Repository<Book>): Promise<Book[]> {
        const s =await this.find();
        console.log("The console here is",s)
        return await this.find();
      },
    
    async createBook(this: Repository<Book>,book: Book) {
        return await this.save(book);
      },

    async createInstanceBook(this: Repository<Book>,createBookDto: CreateBookDto){
        return await this.create(createBookDto);
      }
}
