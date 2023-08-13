import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsInt, Min, Max } from 'class-validator';

export class CreateBookDto {
  @ApiProperty({ example: 'Harry Potter', description: 'The name of the book' })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({ example: 'Harry Potter is a.....', description: 'The description of the book' })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({ example:3, description: 'The discount of the book' })
  @IsInt()
  @Min(1)
  @Max(99)
  discountRate: number;

  @ApiProperty({ example: 'image url', description: 'The url of the image of the book' })
  @IsNotEmpty()
  @IsString()
  coverImage: string;

  @ApiProperty({ example: 33, description: 'price of the book' })
  @IsNotEmpty()
  @IsInt()
  price: number;
}
