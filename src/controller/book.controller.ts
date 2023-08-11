import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { BookService } from '../service/book.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Book } from '../entity/book.entity';

@ApiTags('books')
@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @ApiOperation({ summary: 'Get book by ID' })
  @ApiResponse({ status: 200, description: 'Successful', type: Book })
  @Get(':id')
  async getBook(@Param('id') id: number): Promise<Book> {
    return this.bookService.findById(id);
  }

  @ApiOperation({ summary: 'Buy a book' })
  @Post(':id/buy')
  async buyBook(@Param('id') bookId: number, @Body() purchaseData: any): Promise<boolean> {
    // Extract user ID and perform purchase logic
    const userId = purchaseData.userId;
    return this.bookService.buyBook(userId, bookId);
  }
}
