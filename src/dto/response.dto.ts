import { ApiProperty } from '@nestjs/swagger';

export class ResponseDto<T> {
  @ApiProperty({ example: 200, description: 'Status code' })
  statusCode: number;

  @ApiProperty({ example: 'Success', description: 'Message describing the result' })
  message: string;

  @ApiProperty({ type: {}, description: 'Data returned from the operation', required: false })
  data?: T;
}