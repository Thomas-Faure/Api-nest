import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../../domain/users/user.repository';
import { User } from '../../../domain/users/user.entity';

@Injectable()
export class InMemoryUserRepository implements UserRepository {
  private users: User[] = [];

  async create(user: User): Promise<User> {
    this.users.push(user);
    return user;
  }

  async findById(id: string): Promise<User | undefined> {
    return this.users.find((u) => u.id === id);
  }

  async findAll(): Promise<User[]> {
    return [...this.users];
  }
}
