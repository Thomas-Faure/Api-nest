import { Module } from '@nestjs/common';
import { CreateUserUseCase } from '../application/users/use-cases/create-user.usecase';
import { ListUsersUseCase } from '../application/users/use-cases/list-users.usecase';
import { UserRepository } from '../domain/users/user.repository';
import { InMemoryUserRepository } from '../infrastructure/users/repositories/in-memory.user.repository';
import { UserController } from '../infrastructure/users/controllers/user.controller';

@Module({
  controllers: [UserController],
  providers: [
    { provide: UserRepository, useClass: InMemoryUserRepository },
    CreateUserUseCase,
    ListUsersUseCase,
  ],
})
export class UserModule {}
