import { IsNotEmpty, IsString, IsInt, Min, Max } from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsInt()
  @Min(1)
  @Max(99)
  discountRate: number;

  @IsNotEmpty()
  @IsString()
  coverImage: string;

  @IsNotEmpty()
  @IsInt()
  price: number;
}
