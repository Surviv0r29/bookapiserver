import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { BookService } from '../service/book.service';
import { ApiBody, ApiOperation, ApiProperty, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Book } from '../entity/book.entity';
import { CreateBookDto } from 'src/dto/create-book.dto';
import { DeleteBookDto } from 'src/dto/delete-book.dto';
import { ResponseDto } from 'src/dto/response.dto';

@ApiTags('books')
@Controller('/api/books')
export class BookController {
  constructor(private readonly bookService: BookService) {}
  @Get()
  @ApiOperation({ summary: 'Get all books', description: 'Retrieve a list of all books in the database' })
  @ApiResponse({ status: 200, description: 'Successfully retrieved books', type: ResponseDto<[Book]> })
 async getAllBooks(): Promise<ResponseDto<Book[]>> {
    const data = await this.bookService.getAllBooks();
    const response: ResponseDto<Book[]>={
      statusCode: 201,
      message:"books sent sucessfully..",
      data,
    }
    return response;
  }
  @ApiOperation({ summary: 'Get book by ID' })
  @ApiResponse({ status: 200, description: 'Successful', type: ResponseDto<Book> })
  @Get(':id')
  async getBook(@Param('id') id: number): Promise<ResponseDto<Book>> {
    const data = await this.bookService.findById(id);
    const response: ResponseDto<Book>={
      statusCode: 201,
      message:"book sent sucessfully..",
      data,
    }
    return response;
  }
  @Post()
  @ApiOperation({ summary: 'Create a new book', description: 'Create a new book in the database' })
  @ApiBody({type:CreateBookDto})
  @ApiResponse({ status: 201, description: 'Book successfully created', type: ResponseDto<Book> })
  async createBook(@Body() createBookDto: CreateBookDto): Promise<ResponseDto<Book>> {
    const data = await this.bookService.createBook(createBookDto);
    const response: ResponseDto<Book>={
      statusCode: 201,
      message:"book created sucessfully..",
      data,
    }
    return response;
  }
  @ApiOperation({ summary: 'Buy a book' })
  @Post(':id/purchase')
  async buyBook(@Param('id') bookId: number, @Body() purchaseData: any): Promise<ResponseDto<Boolean>> {
    const userId = purchaseData.userId;
    const dat = await this.bookService.buyBook(userId, bookId);
    const response: ResponseDto<Boolean>={
      statusCode: 201,
      message:"book purchased sucessfully..",
      data:true
    }
    return response;
  }
  @Post('/delete')
  @ApiBody({type:DeleteBookDto})
  @ApiOperation({ summary: 'Delete a book', description: 'Delete a book in the database' })
  @ApiResponse({ status: 200, description: 'Book successfully deleted',type:ResponseDto<Boolean> })
  async deleteBookByid(@Body() deleteBookDto:DeleteBookDto): Promise<ResponseDto<Boolean>> {
   const data  = await this.bookService.deleteBookByid(deleteBookDto);
   const response: ResponseDto<Boolean>={
    statusCode: 201,
    message:"book deleted sucessfully..",
    data:true
  }
  return response;
  }
}
