import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from '../repository/user.repository';
import { User } from '../entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
  ) {}

  async findById(id: number): Promise<User> {
    return this.userRepository.findOne({where:{ id: id }});
  }

  async updateBalance(id: number, newBalance: number): Promise<void> {
    await this.userRepository.update(id, { balance: newBalance });
  }
}
