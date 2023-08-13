import { IsNotEmpty, IsInt} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class DeleteBookDto {
  @ApiProperty({ example: 1, description: 'id of the book' })
  @IsNotEmpty()
  @IsInt()
  id: number;
}
