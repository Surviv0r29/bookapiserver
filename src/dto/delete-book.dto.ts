import { IsNotEmpty, IsInt} from 'class-validator';

export class DeleteBookDto {

  @IsNotEmpty()
  @IsInt()
  id: number;
}
