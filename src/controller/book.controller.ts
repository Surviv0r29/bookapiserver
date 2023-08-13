import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { BookService } from '../service/book.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Book } from '../entity/book.entity';
import { CreateBookDto } from 'src/dto/create-book.dto';
import { DeleteBookDto } from 'src/dto/delete-book.dto';

@ApiTags('books')
@Controller('/api/books')
export class BookController {
  constructor(private readonly bookService: BookService) {}
  @Get()
  @ApiOperation({ summary: 'Get all books', description: 'Retrieve a list of all books in the database' })
  @ApiResponse({ status: 200, description: 'Successfully retrieved books', type: [Book] })
  async getAllBooks(): Promise<Book[]> {
    return this.bookService.getAllBooks();
  }
  @ApiOperation({ summary: 'Get book by ID' })
  @ApiResponse({ status: 200, description: 'Successful', type: Book })
  @Get(':id')
  async getBook(@Param('id') id: number): Promise<Book> {
    return this.bookService.findById(id);
  }
  @Post()
  @ApiOperation({ summary: 'Create a new book', description: 'Create a new book in the database' })
  @ApiResponse({ status: 201, description: 'Book successfully created', type: Book })
  async createBook(@Body() createBookDto: CreateBookDto): Promise<Book> {
    return this.bookService.createBook(createBookDto);
  }
  @ApiOperation({ summary: 'Buy a book' })
  @Post(':id/purchase')
  async buyBook(@Param('id') bookId: number, @Body() purchaseData: any): Promise<boolean> {
    const userId = purchaseData.userId;
    return this.bookService.buyBook(userId, bookId);
  }
  @Post('/delete')
  @ApiOperation({ summary: 'Delete a book', description: 'Delete a book in the database' })
  @ApiResponse({ status: 200, description: 'Book successfully deleted' })
  async deleteBookByid(@Body() deleteBookDto:DeleteBookDto): Promise<void> {
    await this.bookService.deleteBookByid(deleteBookDto);
  }
}
