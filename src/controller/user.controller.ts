import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from '../entity/user.entity';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Get user by ID' })
  @ApiResponse({ status: 200, description: 'Successful', type: User })
  @Get(':id')
  async getUser(@Param('id') id: number): Promise<User> {
    return this.userService.findById(id);
  }
}
