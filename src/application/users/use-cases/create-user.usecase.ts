import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../../domain/users/user.repository';
import { User } from '../../../domain/users/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { randomUUID } from 'crypto';

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly repository: UserRepository) {}

  async execute(dto: CreateUserDto): Promise<User> {
    const user: User = { id: randomUUID(), name: dto.name };
    return this.repository.create(user);
  }
}
