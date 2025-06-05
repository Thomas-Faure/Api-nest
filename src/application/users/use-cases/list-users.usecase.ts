import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../../domain/users/user.repository';
import { User } from '../../../domain/users/user.entity';

@Injectable()
export class ListUsersUseCase {
  constructor(private readonly repository: UserRepository) {}

  execute(): Promise<User[]> {
    return this.repository.findAll();
  }
}
